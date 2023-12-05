const obj = {
    name: "John", age: 30
}
console.log("Recupero dati in corso...")

function fetchDataFromAPI(obj) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (typeof obj === 'object') {
                resolve(obj)
            } else {
                setTimeout(() => {
                    reject("errore obj")
                }), 2000
            }
        }
        ))};
   

fetchDataFromAPI("ciao")
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });

// const obj ={
//     name: "John", age: 30
// }
// console.log("Recupero dati in corso...")

// function fetchDataFromAPI(obj) {
//     return new Promise((resolve, reject) => (
//         setTimeout(() => {
//                 resolve(obj)
//         }, 3000)
//     ))
// }

// fetchDataFromAPI(obj)
// .then(data=>console.log(data))
// .catch(error=>console.log(error))