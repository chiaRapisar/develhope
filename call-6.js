// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, 
// come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. 
// -Utilizzare setTimeout per simulare il ritardo dell'operazione.
const obj= { 
    name:"John", age:30
}
console.log("Recupero dati in corso...")
function fetchDataFromAPI(callback) {
    setTimeout(()=>callback(obj), 3000);
  }
  
  function handleData(data) {
    console.log(`${data.name}, ${data.age}`)
  }
  
  fetchDataFromAPI(handleData);

  