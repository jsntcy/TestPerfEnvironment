# `management.azure.com.advisor.operations.list`

## `summary`
Lists all the available Advisor REST API operations.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `responses[name="200 OK"]/description`
OK. Successfully retrieved operation list.

## `definitions[name="OperationEntityListResult"]/description`
The list of Advisor operations.

## `definitions[name="OperationEntityListResult"]/properties[name="nextLink"]/description`
  
The link used to get the next page of operations.

## `definitions[name="OperationEntityListResult"]/properties[name="value"]/description`
  
The operation supported by Advisor.

## `definitions[name="OperationEntity"]/description`
The list of operations.

## `definitions[name="OperationEntity"]/properties[name="name"]/description`
  
Operation name: {provider}/{resource}/{operation}.

## `definitions[name="OperationEntity"]/properties[name="display"]/description`
  
The operation supported by Advisor.

## `definitions[name="OperationDisplayInfo"]/description`
The operation supported by Advisor.

## `definitions[name="OperationDisplayInfo"]/properties[name="description"]/description`
  
The description of the operation.

## `definitions[name="OperationDisplayInfo"]/properties[name="operation"]/description`
  
The action that users can perform, based on their permission level.

## `definitions[name="OperationDisplayInfo"]/properties[name="provider"]/description`
  
Service provider: Microsoft Advisor.

## `definitions[name="OperationDisplayInfo"]/properties[name="resource"]/description`
  
Resource on which the operation is performed.


