const card = document.getElementById('cards');

const datos = [];

function llamarApi(url) {

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            datos.push(data.results);
            datos.forEach(element => {
                console.log(element)
                crearElemento(element[0])
            });

        });
}


function crearElemento(element){
    
    const div = document.createElement('div');
    const image = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    image.src = element.image;
    h3.textContent = element.name;
    p.textContent = element.species;
    div.appendChild(image);
    div.appendChild(h3);
    div.appendChild(p);
    card.appendChild(div);
}

llamarApi("https://rickandmortyapi.com/api/character");





