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

function somma(num) {
    if (typeof num == "number"&& num>0) {
        const valore =String(num).split("").map(Number)
        const sum = valore.reduce((a,num)=>a+num,0);
        return sum
    }
    else {
        return "Inserire un numero"
    }}

console.log(somma(123))


