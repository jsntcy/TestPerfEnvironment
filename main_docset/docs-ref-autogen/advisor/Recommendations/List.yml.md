# `management.azure.com.advisor.recommendations.list`

## `summary`
Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.

## `uriParameters[name="subscriptionId"]/description`
The Azure subscription ID.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `uriParameters[name="$filter"]/description`
The filter to apply to the recommendations.

## `uriParameters[name="$top"]/description`
The number of recommendations per page if a paged version of this API is being used.

## `uriParameters[name="$skipToken"]/description`
The page-continuation token to use with a paged version of this API.

## `responses[name="200 OK"]/description`
OK. Successfully obtained cached recommendations.

## `definitions[name="ResourceRecommendationBaseListResult"]/description`
The list of Advisor recommendations.

## `definitions[name="ResourceRecommendationBaseListResult"]/properties[name="nextLink"]/description`
  
The link used to get the next page of recommendations.

## `definitions[name="ResourceRecommendationBaseListResult"]/properties[name="value"]/description`
  
Advisor Recommendation.

## `definitions[name="ResourceRecommendationBase"]/description`
The list of recommendations.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.category"]/description`
  
The category of the recommendation.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.impact"]/description`
  
The business impact of the recommendation.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.impactedField"]/description`
  
The resource type identified by Advisor.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.impactedValue"]/description`
  
The resource identified by Advisor.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.lastUpdated"]/description`
  
The most recent time that Advisor checked the validity of the recommendation.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.metadata"]/description`
  
The recommendation metadata.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.recommendationTypeId"]/description`
  
The recommendation-type GUID.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.risk"]/description`
  
The potential risk of not implementing the recommendation.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.shortDescription"]/description`
  
A summary of the recommendation.

## `definitions[name="ResourceRecommendationBase"]/properties[name="properties.suppressionIds"]/description`


## `definitions[name="ResourceRecommendationBase"]/properties[name="id"]/description`
  
The resource ID.

## `definitions[name="ResourceRecommendationBase"]/properties[name="name"]/description`
  
The name of the resource.

## `definitions[name="ResourceRecommendationBase"]/properties[name="type"]/description`
  
The type of the resource.

## `definitions[name="category"]/description`
The category of the recommendation.

## `definitions[name="impact"]/description`
The business impact of the recommendation.

## `definitions[name="risk"]/description`
The potential risk of not implementing the recommendation.

## `definitions[name="ShortDescription"]/description`
A summary of the recommendation.

## `definitions[name="ShortDescription"]/properties[name="problem"]/description`
  
The issue or opportunity identified by the recommendation.

## `definitions[name="ShortDescription"]/properties[name="solution"]/description`
  
The remediation action suggested by the recommendation.


