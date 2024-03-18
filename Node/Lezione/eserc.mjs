// import { createServer } from 'node:http';
import express from 'express';


const app = express();
app.use((req, res, next) => {
    console.log(`Metodo: ${req.method}, URL: ${req.url}`);
    next();
  });
  app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Homepage');
  });
  app.get('/prodotti', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Pagina dei prodotti');

  });
  app.use((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Pagina non trovata</h1>');

  });
 
  app.listen(3000, () => {
    console.log('Server in esecuzione');
  });

// const server = createServer((request , response) => {

//     const url = request.url;

//     // function middleware() {
//     //     console.log(req.method, req.url)
        
//     // }

//     if(url === '/'){
        
//         response.statusCode = 200
//         response.setHeader('Content-type' , 'text/html')
//         response.end('Homepage!')
//     }  else if (url === '/prodotti') {
//         response.writeHead (200, { 'Content-Type': 'text/plain' });
//         response.end('Pagina dei prodotti');
//       }   else {
//         response.writeHead(404, { 'Content-Type': 'text/plain' });
//         response.end('404 Pagina non trovata');
//       }
// })
// server.listen(3000, ()=>{
//     console.log('Server Start');
// })