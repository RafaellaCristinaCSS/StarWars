$(document).ready(() => {
    var loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';

    $('.cards').click(function chamar_model() {

        loadingElement.style.display = 'block';
        var id = $(this).attr("id");
        elements = document.getElementById('myElement');
        var data = '<div class="col mb-3" style="font-size:20px; text-transform: uppercase;font-weight: bold">' + id + '</div>';

        fetch(`https://swapi.dev/api/${id}`).then(Response => Response.json()).then(json => {
            loadingElement.style.display = 'none';
            json.results.forEach(function (result, kay) {
                if (id == 'films') {
                    data += `<a onclick="entity_element(${id}, ${kay})" id=${kay} class="btn col">` + result.title + `</a>`
                } else {
                    data += `<a onclick="entity_element(${id}, ${kay})" id=${kay} class="btn col">` + result.name + `</a>`
                }
            });
            elements.innerHTML = data
            document.getElementById('modal').style.display = 'block';
            document.getElementById('logo').style.display = 'none';
        })
    })

})
