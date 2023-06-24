document.getElementById('btn1').onclick = ()=>{
  alert('Cargando Info Rick & Morty ');
  console.log(datos);
}

const datos = [];

function llamarApi(url) {
  
    fetch(url)
    .then((res) => res.json())
    .then((data) => { 
      datos.push(data);
    });
}

llamarApi("https://rickandmortyapi.com/api/character");
