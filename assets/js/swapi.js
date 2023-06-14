$(document).ready(() => {
    
    $('.cards').click(function chamar_model() {
        var id = $(this).attr("id");
        let baseurl = `https://swapi.dev/api/${id}`
        elements = document.getElementById('meuElemento');
        var data;
        if (id == 'films') {
            var specificity = "title";
            fetch(baseurl).then(Response => Response.json()).then(json => {
                console.log(json.results)
                json.results.forEach(result => {
                    console.log(result +' e '+ specificity)
                    data += '<p>' + result.title + '</p>'
                });
                elements.innerHTML = data
                document.getElementById('modal').style.display = 'block';
            })
        }
        var specificity = "name";
        fetch(baseurl).then(Response => Response.json()).then(json => {
            console.log(json.results)
            json.results.forEach(result => {
                console.log(result +' e '+ specificity)
                data += '<p>' + result.name + '</p>'
            });
            elements.innerHTML = data
            document.getElementById('modal').style.display = 'block';
        })
    })
})