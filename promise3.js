// const myPromise = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         // reject(new Error('promise fallita'))
//         resolve('promise risolta')
//     }, 2000);
// })

// myPromise
// .then(data => console.log(data))
// .catch(err => console.log(err))

//Altro esempio
const number = 5
const myPromise = new Promise ((resolve, reject)=>{
    if(number >=5){
    setTimeout(() => {
        resolve('prima promise risolta')
    }, 2000);
} else {
    setTimeout(() => {
        reject(new Error('promise fallita'))
    }, 2000);
}
})

const secondPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('seconda promise risolta')
    }, 1000);
})

myPromise
.then(data => {
    console.log(data);
    return secondPromise
})
.then(result => console.log(result))
.catch(err => console.log(err))