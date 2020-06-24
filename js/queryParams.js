function getQueryParams() {
    let params = {};
    let queryParams = window.location.search.substring(1).split("&");
    if (queryParams.length == 0 || queryParams[0].length == 0) return params;
    for (let queryParam of queryParams) {
        let pair = queryParam.split("=");
        params[pair[0]] = pair[1];
    }
    return params;
}