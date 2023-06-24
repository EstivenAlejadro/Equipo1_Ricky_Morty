document.getElementById('btn1').onclick = ()=>{
  alert('Hola Mundo Equipo Uno');
  console.log(datos);
}

const datos = [];
const url = "https://rickandmortyapi.com/api/character"
function llamar() {
  
    fetch(url)
    .then((res) => res.json())
    .then((data) => { 
      datos.push(data);
    });
}

llamar();
