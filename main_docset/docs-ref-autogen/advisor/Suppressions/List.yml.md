# `management.azure.com.advisor.suppressions.list`

## `summary`
Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.

## `uriParameters[name="subscriptionId"]/description`
The Azure subscription ID.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `responses[name="200 OK"]/description`
OK. Successfully got all suppressions in a subscription.

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


