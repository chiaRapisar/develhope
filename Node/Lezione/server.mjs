import { application } from 'express'
import {createServer} from 'node:http'

const server = createServer(async(req, res) =>{
console.log(req.url)
console.log(req.method)



if(req.url==='/'){
   try {
    const dataFetch = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    const resp = await dataFetch.json()
    console.log(resp)
    res.writeHead(200, "Content-type", "application/json")
    res.end(JSON.stringify(resp))

   } catch (error) {
    console.error(error)
    res.writeHead(500, "Content-type", "text/plain")
    res.end("Server Error")
   }  
 
} else if(req.url==="/bulbasaur"){
    try {
        const dataFetch = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        const resp = await dataFetch.json()
        console.log(resp)
        res.writeHead(200, "Content-type", "application/json")
        res.end(JSON.stringify(resp))
    
       } catch (error) {
        console.error(error)
        res.writeHead(500, "Content-type", "text/plain")
        res.end("Server Error")
       }  
} else{
    
    res.writeHead(404, "Content-type", "text/html")
    res.end("<h1>Page not Found</h1>")
}
})


server.listen(3000, ()=>{
    
    console.log(`Server running on  http://localhost:3000`)
})
