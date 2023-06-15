$(document).ready(() => {

    $('.cards').click(function chamar_model() {

        var id = $(this).attr("id");
        elements = document.getElementById('myElement');
        var data = '<div class="col mb-3" style="font-size:20px; text-transform: uppercase;font-weight: bold">' + id + '</div>';

        fetch(`https://swapi.dev/api/${id}`).then(Response => Response.json()).then(json => {
            console.log(json.results)

            json.results.forEach(result => {
                if (id == 'films') {
                    data += '<div class="col"><a>' + result.title + '</a></div>'
                } else {
                    data += '<div class="col"><a>' + result.name + '</a></div>'
                }
            });
            elements.innerHTML = data
            document.getElementById('modal').style.display = 'block';
            document.getElementById('logo').style.display = 'none';
        })
    })
})