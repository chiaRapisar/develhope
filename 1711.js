// const people = [
//     { name: 'Alice', age: 15 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 17 },
//     { name: 'David', age: 35 },
//     { name: 'Eve', age: 18 }
//   ];
//   const maggiorenni=[];
//   for (let i=0; i<people.length;i++) {
//     if (people[i].age>=18) {
//       maggiorenni.push(people[i].name, people[i].age)
      
//     }
//   }
  // console.log(maggiorenni)

// const N=(3);
// let somma =0;
// for(let i=1; i<=N; i++){
//   somma+=i
// }
// console.log(somma);

// const numeri = [1,2,3,4,5,5,6] ;
// let somma = 0;
// for(let i =0; i<numeri.length;i++){
//   somma += numeri[i];
// }
// const media= somma/numeri.length;
// console.log(media);



// const numeri = [5, 8, 12, 4, 9];
// let somma = 0;

// for (let i = 0; i < numeri.length; i++) {
//   somma += numeri[i];
// }

// const media = somma / numeri.length;
// console.log("La media è:", media);

// trovare età media tra arraydi utenti, non logga ma restituisce in una funzione
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 }
];
let media=0;
for (let i = 0; i < users.length; i++) {
  media += users[i].age;
}
console.log(Math.round(mediumage/users.length));
// for(let i=0; i<users.length; i++){
// let sum= somma += users[i].age;
//  console.log(sum)} return somma/users.length;
//  function mediaetà() {
//   sum + = users[i].age;
  
//  }




