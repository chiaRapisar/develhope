// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.

function doubleArray(arr, callback) {
    const doubled= arr.map(callback);
    return doubled
  }
  function doubleValue(num) {
    return num * 2;
  }
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, doubleValue);
  console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]