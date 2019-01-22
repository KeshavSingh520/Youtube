var app=angular.module('Youtube');

youtubeFactory.getVideosFromSearchByParams({
    q: 'uri', // (optional) search string
    location: "<SEARCH_LOCATION>", // (optional) The parameter value is a string that specifies latitude/longitude coordinates e.g. '37.42307,-122.08427'.
    locationRadius: "<LOCATION_RADIUS>", // (optional) valid values e.g. '1500m', '5km', '10000ft', and '0.75mi' | default: '5000m'
    order: "<ORDER_TYPE>", // (optional) valid values: 'date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount' | default: 'date'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    publishedAfter: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    publishedBefore: "<PUBLISHED_AFTER>", // (optional) RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
    regionCode: "<REGION_CODE>", // (optional) ISO 3166-1 alpha-2 country code
    relevanceLanguage: "<RELEVANCE_LANGUAGE>", // (optional) ISO 639-1 two-letter language code
    safeSearch: "<SAFE_SEARCH>", // (optional) valid values: 'moderate','none','strict' | defaut: 'moderate'
    maxResults: "<MAX_RESULTS>", // (optional) valid values: 0-50 | default: 5
    videoEmbeddable: "<VIDEO_EMBEDDABLE>", // (optional) valid values: 'true', 'any' | default: 'true'
    videoLicense: "<VIDEO_LICENSE>", // (optional) valid values: 'any','creativeCommon','youtube'
    videoSyndicated: "<VIDEO_SYNDICATED>", // (optional) restrict a search to only videos that can be played outside youtube.com. valid values: 'any','true' | default: 'any'
    fields: "<FIELDS>", // (optional) Selector specifying which fields to include in a partial response
    nextPageToken: "<NEXT_PAGE_TOKEN>", // (optional) either 'nextPageToken' or 'prevPageToken'
    prevPageToken: "<PREV_PAGE_TOKEN>", // (optional) either 'nextPageToken' or 'prevPageToken'
    part: "<PART>", // (optional) default: 'id,snippet'
    key: "AIzaSyC099Mu0ijkmJc-LufkGYdFAlEgtKtjbH4",
}).then(function (success) {
    $scope.results=success.data;
}).catch(function (failure) {
  alert("Something went wrong")
});
