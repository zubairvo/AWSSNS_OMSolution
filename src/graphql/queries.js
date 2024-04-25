/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOMWBounceEmailClient = /* GraphQL */ `
  query GetOMWBounceEmailClient($id: ID!) {
    getOMWBounceEmailClient(id: $id) {
      invalidEmail
      contactNumber
      smsSent
      dateSent
      clientName
      clientId
      dateBounced
      plannerCodes {
        plannerCode
        fullName
        email
        cellphoneNumber
        id
        createdAt
        updatedAt
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOMWBounceEmailClients = /* GraphQL */ `
  query ListOMWBounceEmailClients(
    $filter: ModelOMWBounceEmailClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOMWBounceEmailClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        invalidEmail
        contactNumber
        smsSent
        dateSent
        clientName
        clientId
        dateBounced
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOMWBounceEmailPlanner = /* GraphQL */ `
  query GetOMWBounceEmailPlanner($id: ID!) {
    getOMWBounceEmailPlanner(id: $id) {
      plannerCode
      fullName
      email
      cellphoneNumber
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOMWBounceEmailPlanners = /* GraphQL */ `
  query ListOMWBounceEmailPlanners(
    $filter: ModelOMWBounceEmailPlannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOMWBounceEmailPlanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        plannerCode
        fullName
        email
        cellphoneNumber
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
