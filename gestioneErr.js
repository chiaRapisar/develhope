function performOperation(a, b, callback) {
    if (typeof a != "number" || typeof b != "number") {
        throw new Error("Inserisci un numero")
    }
    try {
        let operations = (a * b) + (a + b);
        callback(null, operations)
    } catch (error) {
        callback(error, null)
    }

}

function displayResult(error, data) {
    if (error) {
        console.error(error)
    } else
        console.log(`Il risultato dell'operazione è ${data}`);
}

performOperation(5, 3, displayResult)