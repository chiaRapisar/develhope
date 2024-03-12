const fs = require('fs');

const filePath = 'file.txt';

const content = 'Questo è il file di testo.';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Il file è stato scritto correttamente:', filePath);
  }
});
