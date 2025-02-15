import feature from "./config";

/*
** This urls must follow the format: {path: "", component:, exact: true}
*/ 
let urls = [

]

urls.map(function(url, index) {
    urls[index].path = feature.root + urls[index].path
})

export default urls;
