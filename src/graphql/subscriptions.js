/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOMWBounceEmailClient = /* GraphQL */ `
  subscription OnCreateOMWBounceEmailClient(
    $filter: ModelSubscriptionOMWBounceEmailClientFilterInput
  ) {
    onCreateOMWBounceEmailClient(filter: $filter) {
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
export const onUpdateOMWBounceEmailClient = /* GraphQL */ `
  subscription OnUpdateOMWBounceEmailClient(
    $filter: ModelSubscriptionOMWBounceEmailClientFilterInput
  ) {
    onUpdateOMWBounceEmailClient(filter: $filter) {
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
export const onDeleteOMWBounceEmailClient = /* GraphQL */ `
  subscription OnDeleteOMWBounceEmailClient(
    $filter: ModelSubscriptionOMWBounceEmailClientFilterInput
  ) {
    onDeleteOMWBounceEmailClient(filter: $filter) {
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
export const onCreateOMWBounceEmailPlanner = /* GraphQL */ `
  subscription OnCreateOMWBounceEmailPlanner(
    $filter: ModelSubscriptionOMWBounceEmailPlannerFilterInput
  ) {
    onCreateOMWBounceEmailPlanner(filter: $filter) {
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
export const onUpdateOMWBounceEmailPlanner = /* GraphQL */ `
  subscription OnUpdateOMWBounceEmailPlanner(
    $filter: ModelSubscriptionOMWBounceEmailPlannerFilterInput
  ) {
    onUpdateOMWBounceEmailPlanner(filter: $filter) {
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
export const onDeleteOMWBounceEmailPlanner = /* GraphQL */ `
  subscription OnDeleteOMWBounceEmailPlanner(
    $filter: ModelSubscriptionOMWBounceEmailPlannerFilterInput
  ) {
    onDeleteOMWBounceEmailPlanner(filter: $filter) {
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
