export type AmplifyDependentResourcesAttributes = {
  "api": {
    "InvokeBounceLambda": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "omwbounceemail": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "function": {
    "OMWBouncedEMailSNS": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "omwEmailBounceSNS": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}