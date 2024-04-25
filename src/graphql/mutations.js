/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOMWBounceEmailClient = /* GraphQL */ `
  mutation CreateOMWBounceEmailClient(
    $input: CreateOMWBounceEmailClientInput!
    $condition: ModelOMWBounceEmailClientConditionInput
  ) {
    createOMWBounceEmailClient(input: $input, condition: $condition) {
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
export const updateOMWBounceEmailClient = /* GraphQL */ `
  mutation UpdateOMWBounceEmailClient(
    $input: UpdateOMWBounceEmailClientInput!
    $condition: ModelOMWBounceEmailClientConditionInput
  ) {
    updateOMWBounceEmailClient(input: $input, condition: $condition) {
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
export const deleteOMWBounceEmailClient = /* GraphQL */ `
  mutation DeleteOMWBounceEmailClient(
    $input: DeleteOMWBounceEmailClientInput!
    $condition: ModelOMWBounceEmailClientConditionInput
  ) {
    deleteOMWBounceEmailClient(input: $input, condition: $condition) {
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
export const createOMWBounceEmailPlanner = /* GraphQL */ `
  mutation CreateOMWBounceEmailPlanner(
    $input: CreateOMWBounceEmailPlannerInput!
    $condition: ModelOMWBounceEmailPlannerConditionInput
  ) {
    createOMWBounceEmailPlanner(input: $input, condition: $condition) {
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
export const updateOMWBounceEmailPlanner = /* GraphQL */ `
  mutation UpdateOMWBounceEmailPlanner(
    $input: UpdateOMWBounceEmailPlannerInput!
    $condition: ModelOMWBounceEmailPlannerConditionInput
  ) {
    updateOMWBounceEmailPlanner(input: $input, condition: $condition) {
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
export const deleteOMWBounceEmailPlanner = /* GraphQL */ `
  mutation DeleteOMWBounceEmailPlanner(
    $input: DeleteOMWBounceEmailPlannerInput!
    $condition: ModelOMWBounceEmailPlannerConditionInput
  ) {
    deleteOMWBounceEmailPlanner(input: $input, condition: $condition) {
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
