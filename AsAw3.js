function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
      const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
      setTimeout(() => {
        if (tempoCaricamento < 1500) {
          resolve(`Il modulo ${modulo} è stato caricato.`);
        } else {
          reject(`Errore durante il caricamento del modulo ${modulo}.`);
        }
      }, tempoCaricamento);
    });
  }
  async function lanciaVeicoloSpaziale() {
    try{
        const moduloA = await caricaModulo(`A`);
        const moduloB = await caricaModulo(`B`);
        const moduloC = await caricaModulo(`C`);
        console.log(moduloA);
        console.log(moduloB);
        console.log(moduloC);
        console.log("Veicolo spaziale pronto per il lancio!");
    }  catch (error) {
        console.log("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.")
    }}
    
  lanciaVeicoloSpaziale()
  
  // implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori