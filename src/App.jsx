import { useEffect, useState } from 'react';
import './App.css';
import { post } from 'aws-amplify/api';
import { generateClient } from 'aws-amplify/api';
import axios from 'axios';


import { createTodo } from './graphql/mutations';
import { listTodos, listOMWBounceEmailClients } from './graphql/queries';

const initialState = { name: '', description: '' };
const client = generateClient();

 

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchInvalidClients()

  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }
  
  async function sendSmsLambda() {
  try {
    console.log("ButtonPressed")
    const restOperation = post({
      apiName: 'InvokeBounceLambda',
      path: '/items',
      options: {
        body: {
          message: 'Lambda has been Invoked'
        }
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    console.log(response);
  } catch (e) {
    console.log('POST call failed: ', JSON.parse(e.response.body));
  }
}
  
  // async function sendSmsLambda(event) {
  //       event.preventDefault();
  //       const response=await axios.post(
  //           'https://vjbsf5kvll.execute-api.eu-west-1.amazonaws.com/dev',
  //           //{ message: `${values.name}`, name: `${values.message}`, email: `${values.email}` }
  //       );
  //       console.log(response);
  //       //setSent(true);
  //   }

  async function fetchInvalidClients() {
    try {
      const todoData = await client.graphql({
        query: listOMWBounceEmailClients
      });
      const todos = todoData.data.listOMWBounceEmailClients.items;
      console.log(todos)
      setTodos(todos);
    } catch (err) {
      console.log('error fetching clients');
    }
  }
  async function addTodo() {
    try {
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo
        }
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Clients with Invalid Emails</h2>

        <div style={styles.container}>
         <table>
        <tr>
            <th>Client</th>
            <th>Inavlid Email</th>
            <th>Contact Number</th>
        </tr>
        
        {todos.map((todo, index) => {
        return (
        <tr key={todo.id ? todo.id : index} style={styles.todo}>
            <td>{todo.clientName}</td>
            <td>{todo.invalidEmail}</td>
            <td>{todo.contactNumber}</td>
        </tr>
        )
        })}
          </table>
        </div>
      
      
       <button style={styles.button} onClick={sendSmsLambda}>
        Contact Planner/Client
      </button>

    </div>
    
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  todo: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px'
  }
};

export default App;