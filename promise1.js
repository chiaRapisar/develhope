const obj ={
    name: "John", age: 30
}
console.log("Recupero dati in corso...")

function fetchDataFromAPI(obj, callback) {
    return new Promise((resolve, reject) => (
        setTimeout(() => {
            if (typeof obj === 'object') {
                resolve(callback(obj))
            } else {
                reject(new Error("Errore, manca oggetto"))
            }
        }, 3000)
    ))
}
function handleData(data) {
    return (`${data.name}, ${data.age}`)
}

fetchDataFromAPI(obj, handleData)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })