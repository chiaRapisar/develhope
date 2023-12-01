function performOperation(a, b, callback) {
    const sum = a + b;
    callback(sum);
  }
  
  function displayResult(result) {
    if (typeof result ==="number") {
        console.log(result)
    } else{
        console.log("Error")
    }
    
  }
  
  performOperation(5, "3", displayResult);








//CON IL PROF
// function performOperation(a, b, callback) {
//     if (typeof a != "number" || typeof b != "number") {
//         throw new Error("Inserisci un numero")
//     }
//     try {
//         let operations = (a * b) + (a + b);
//         callback(null, operations)
//     } catch (error) {
//         callback(error, null)
//     }

// }

// function displayResult(error, data) {
//     if (error) {
//         console.error(error)
//     } else
//         console.log(`Il risultato dell'operazione è ${data}`);
// }

// performOperation(5, 3, displayResult)