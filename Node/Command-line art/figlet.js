var figlet = require("figlet");

figlet("C'è il sole!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// Ho istallato i pacchetti ma non si creano nella cartella. 
// Funziona comunque