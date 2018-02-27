# `management.azure.com.advisor.suppressions.get`

## `summary`
Obtains the details of a suppression.

## `uriParameters[name="resourceUri"]/description`
The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.

## `uriParameters[name="recommendationId"]/description`
The recommendation ID.

## `uriParameters[name="name"]/description`
The name of the suppression.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `responses[name="200 OK"]/description`
OK. Successfully got suppression detail.

## `definitions[name="SuppressionContract"]/description`
The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.

## `definitions[name="SuppressionContract"]/properties[name="properties.suppressionId"]/description`
  
The GUID of the suppression.

## `definitions[name="SuppressionContract"]/properties[name="properties.ttl"]/description`
  
The duration for which the suppression is valid.

## `definitions[name="SuppressionContract"]/properties[name="id"]/description`
  
The resource ID.

## `definitions[name="SuppressionContract"]/properties[name="name"]/description`
  
The name of the resource.

## `definitions[name="SuppressionContract"]/properties[name="type"]/description`
  
The type of the resource.


