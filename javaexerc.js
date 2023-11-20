// const array=["mela", "pera", "banana", "ciliegia"];

// function medialunghezz(array) {
//     let sum= 0;
//     array.forEach(element => {
//         sum +=element.length;
//     });
//     return Math.round(sum/array.length);
//     // for (let i = 0; i < array.length; i++) {
//     //     sum += array[i].length;
        
//     // } return Math.round(sum/array.length);
// }
 
// let qualc= medialunghezz(array);
// console.log(qualc);


// const array=[9, 4, 6, 2 , 20];
// function max(array) {
//     let sum =0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2!==0){
//         sum +=array[i];
//     }
// }
// return sum;
// }
// let func= max(array);
// console.log(func);

// const studenti = [
//     { nome: "Alice", voto: 85 },
//     { nome: "Bob", voto: 92 },
//     { nome: "Charlie", voto: 78 },
//     { nome: "David", voto: 88 },
//     { nome: "Eve", voto: 95 }
//   ];

//   function media(studenti) {
//     let voto=studenti[0];
//     studenti.forEach(studenti=> {
//         if(voto.voto < studenti.voto){
//             voto = studenti;
//         }
//     });  
//     return voto
// }
//   let medias = media(studenti);
//   console.log(medias);

const studenti = [
    { nome: "Alice", eta: 17, mediaVoti: 8.5 },
    { nome: "Bob", eta: 22, mediaVoti: 7.8 },
    { nome: "Charlie", eta: 16, mediaVoti: 9.2 },
    { nome: "David", eta: 23, mediaVoti: 6.5 }
];

function maggiorenni(studenti) {
    const maggiorenni=[];
    for (let i = 0; i < studenti.length; i++) {
        if (studenti[i].eta>=18) {
            maggiorenni.push(studenti[i]);
        }
    } return maggiorenni
    
}
let maggior = maggiorenni(studenti);
console.log(maggior);