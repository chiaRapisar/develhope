// -La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
// filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true
function filterArray(arr, callback) {
   return callback(arr)
   } 
   
   function isEven(num) {
    return num.filter(number=>number%2==0)
   }
   
   const numbers = [1, 2, 3, 4, 5, 6];
   const evenNumbers = filterArray(numbers, isEven);
   console.log(evenNumbers); // Should output [2, 4, 6]