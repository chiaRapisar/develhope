const btn= document.querySelector('button')
const container = document.querySelector('.container')

const getData = async ()=>{
    try{
        container.innerHTML= ''
        const response = await fetch(`https://api.chucknorris.io/jokes/random`)
        const data = await response.json()
        console.log(data)

        const paragrafo = document.createElement('p')
        paragrafo.textContent= data.value
        container.appendChild(paragrafo)
    } catch(error){
        console.error(error)
    }
}
btn.addEventListener('click', getData)



// function getData() {
    

// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => response.json())
// .then(data => {
//     document.querySelector('#joke').innertext= data.value}

// .catch(error){
//     console.log(error)
// }}