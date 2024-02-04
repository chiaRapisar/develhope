import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const root = document.querySelector('#root')

// fetch(`https://api.github.com/users/chiarapisar`)
// .then(response => {
//   console.log(`Response status: ${response.status}`)
//   return response.json()
// })
// .then((json) => {
//   console.log(json)
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
 
)
