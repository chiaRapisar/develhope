// // funzione con argomento un numero, dividere nelle cifre individuali e restituirlo dentro un'array
// function numeri(num) {
//     let cifre= numeri.map(num=>num.split(""));
//     return num;
// }
// let stringa=numeri(150);
// console.log(stringa)

// function numero(num) {
//     if (typeof num == "number") {
//     num = String(num);
//     // const arr =num.split("").map(Number);
//     const arr =num.split("").map((item)=>parseInt(item));
//     return arr;
//     }
//     else{
//         return "Inserire un numero"
//     }
// }
// console.log(numero("123"));

// let ciao = "ciao come stai";
// console.log(ciao.split(""));

// crea una funzione che somma le cifre di un numero che passiamo come parametro

// function somma(num) {
//     if (typeof num == "number"&& num>0) {
//         const valore =String(num).split("").map(Number)
//         const sum = valore.reduce((a,num)=>a+num,0);
//         return sum
//     }
//     else {
//         return "Inserire un numero"
//     }}

// console.log(somma(123))

//CALLBACK
// function stepOne(cb) {
//     setTimeout(() => {
//         console.log("Step one completed");
//         cb()
//     }, 2000);

// }
// function stepTwo(cb) {
//     setTimeout(() => {
//         console.log("Step two completed");
//         cb()
//     }, 1500);

// }
// function stepThree() {
//     setTimeout(() => {
//         console.log("Step three completed");
//     }, 1000);

// }

// stepOne(()=>stepTwo(()=>stepThree()))

//29-11
// creiamo una funzione sumNumbers con un paramentro cb, la funzione deve generare un array con 10 numeri random,
//  e passarli alla cb, la quale deve sommarli e restituire la somma,
//  che sarà loggata in console dalla funzione sumNumbers

// function sumNumbers(cb) {
//     let numbers =[]
//     for (let i = 0; i < 10; i++) {
//         const number = Math.floor(Math.random()*(10 - 1)+ 1);
//         numbers.push(number)
//     } console.log(cb(numbers))  
// }
// function sum(arr) {
//    const sum = arr.reduce((a,number)=> a + number,0);
//    return sum
// } 

// sumNumbers(sum)

//creare una funzione che restituisce in un array i primi x numeri a partire da un numero y
// function printNumber(x,y) {
//     let numbers=[];
//     for (let i = y+1; i <= y+x; i++) {
//         numbers.push(i)
//     } return numbers 
// }
// //oppure: let i=1;i<=X; i++)
// //risultato.push(y+1manonsono sicura)
// const result=(printNumber(10,40))
// console.log(result);
// //restituisce i primi 10 numeri dopo il 40

//04 dicembre es nella lezione


function Job(num) {
    return new Promise((resolve, reject)=>{
        if (typeof num!=="number") {
            reject("error")
        }
         if (num%2!==0) {
            setTimeout(() => {
                resolve("odd")
            }, 1000);
        } else if(num%2==0){
            setTimeout(() => {
        resolve("even");
            }, 2000);
        }
})}

Job(3)
.then(num => console.log(num))
.catch(err => console.error(err))

// function myPromise(){ 
//     return new Promise((resolve, reject) => {
//     if (typeof arr == 'object') {
//       setTimeout(() => {
//         resolve(arr)
//       }, 1000)
//     } else {
//       setTimeout(() => {
//         reject('inserisci un array')
//       }, 1000)
//     }
//   })}
  
//   myPromise()
//     .then(data => {
//       const newArr = data.map(num => num * 2)
//       console.log(newArr);
//     })
//     .catch(err => console.log('blocco catch', err))