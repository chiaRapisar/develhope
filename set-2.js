let tempoRimanente = 10;
console.log("Conto alla rovescia in corso ...");
function contoAllaRovescia() {
    const tempo = setInterval(() => {
        tempoRimanente--;
        console.log(`Rimane ${tempoRimanente}`)
    }, 1000);

    setTimeout(() => {
        clearInterval(tempo);
        console.log("Conto alla rovescia terminato!")
    }, 10000);
}

contoAllaRovescia();