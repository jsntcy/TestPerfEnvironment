# `management.azure.com.advisor.recommendations`

## `operations[uid="management.azure.com.advisor.recommendations.generate"]/summary`
Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.

## `operations[uid="management.azure.com.advisor.recommendations.get"]/summary`
Obtains details of a cached recommendation.

## `operations[uid="management.azure.com.advisor.recommendations.getgeneratestatus"]/summary`
Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.

## `operations[uid="management.azure.com.advisor.recommendations.list"]/summary`
Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.


