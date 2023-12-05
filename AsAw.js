function caricamentoDati() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
        }, 2000);
    });
}

async function ottieniDati() {
    try {
        const dati = await caricamentoDati();
        console.log(dati);
    } catch (error) {
        console.log(error);
    }
}
ottieniDati()
