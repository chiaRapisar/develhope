const number = 10
const myPromise = new Promise ((resolve, reject)=>{
    if(number >=5){
    setTimeout(() => {
        resolve('Promise risolta')
    }, 2000);
} else {
    setTimeout(() => {
        reject(new Error('Promise fallita'))
    }, 2000);
}
})

myPromise
.then(data => console.log(data))
.catch(err => console.log(err))