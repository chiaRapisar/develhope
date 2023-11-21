const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

   studenti.forEach(studente => {
    console.log(studente.nome);
    
  });

const bravo = studenti.find(studente=>studente.voto>90);
console.log(bravo);

const sum = studenti.reduce((a, studente)=>a + studente.voto,0);
const media = sum/studenti.length;
console.log(media);

const maiuscolo=studenti.map(studente=>studente.nome.toUpperCase());
console.log(maiuscolo);

const bravi = studenti.filter(studente=> studente.voto >85);
console.log(bravi);
