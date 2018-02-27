# `management.azure.com.advisor.recommendations.getgeneratestatus`

## `summary`
Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.

## `uriParameters[name="subscriptionId"]/description`
The Azure subscription ID.

## `uriParameters[name="operationId"]/description`
The operation ID, which can be found from the Location field in the generate recommendation response header.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `responses[name="202 Accepted"]/description`
Accepted. Recommendation generation is in progress.

## `responses[name="204 No Content"]/description`
NoContent. Recommendation generation has been completed.


