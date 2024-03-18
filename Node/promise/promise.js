function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      // Simuliamo un processo asincrono usando setTimeout
      setTimeout(() => {
        if (win) {
          resolve(`${player} ha vinto un premio nell'estrazione!`);
        } else {
          reject(new Error(`${player} ha perso la partita.`));
        }
      }, 1000); // Simula un secondo di tempo di esecuzione
    });
  }
  
  // Catena di promesse per i giocatori Joe, Caroline e Sabrina
  luckyDraw("Joe")
    .then((result) => {
      console.log(result);
      return luckyDraw("Caroline");
    })
    .then((result) => {
      console.log(result);
      return luckyDraw("Sabrina");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Errore nella catena di promesse:", error);
    });
  