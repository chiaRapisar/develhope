//Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" 
//per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
//Alla fine, quando tutti i moduli sono stati caricati con successo, 
//stampa in console "Veicolo spaziale pronto per il lancio!".


function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
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
        console.log(error)
    }}
    
  lanciaVeicoloSpaziale()
  
  // ipmlementa la funzione asincrona "lanciaVeicoloSpaziale"