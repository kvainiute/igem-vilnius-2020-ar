import {
    data
} from "./preview-db2.js";

import {
    init
} from './script-old.js';

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

let params = getQueryParams();
let it = data[params["model"]];
document.querySelector('title').innerText += it.meta.nameLT;

let models = init(it.model, it.meta); // magic function
