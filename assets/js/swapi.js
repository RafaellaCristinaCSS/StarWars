function filter(type, specificity) {
    var data = [];
    Promise.all([swapi_get(type)])
        .then(function (results) {
            for (i = 0; i < results[0].data.results.length; i++) {
                path = "results[0].data.results" + "[" + i + "]." + specificity
                data.push(eval(path))
            }
        });
    console.log(data)
};

function swapi_get(parameter) {
    return axios.get(`https://swapi.dev/api/${parameter}`);
}
