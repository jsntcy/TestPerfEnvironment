# `management.azure.com.advisor.recommendations.get`

## `summary`
Obtains details of a cached recommendation.

## `uriParameters[name="resourceUri"]/description`
The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.

## `uriParameters[name="recommendationId"]/description`
The recommendation ID.

## `uriParameters[name="api-version"]/description`
The version of the API to be used with the client request.

## `responses[name="200 OK"]/description`
OK. Successfully got recommendation detail.

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


