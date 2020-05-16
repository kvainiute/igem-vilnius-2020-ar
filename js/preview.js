import { data } from "./preview-db.js";
import { init, animateN, animateAN } from './script.js';

function getQueryParams(){
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

switch (it.model.animationType){
    case 'an':
        animateAN();
        break;
    case 'n':
        animateN();
        break;
}

if (it != undefined && typeof(it.displayFunction) === "function" ){
    it.displayFunction(models); // additional
}