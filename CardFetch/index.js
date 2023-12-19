const body= document.querySelector('body');
const btn = document.querySelector('button');
const container = document.querySelector('.container')

const getData = async ()=> {
    try{ 
        container.innerHTML= ''
        const inputValue = document.querySelector('input').value
        const fetchData = await fetch (`https://ringsdb.com/api/public/card/${inputValue}.json?_format=json`)
        const data = await fetchData.json()
        console.log(data)

        const name = document.createElement('h2')
        name.textContent= data.name
        const img = document.createElement('img')
        img.setAttribute('src', `https://ringsdb.com/${data.imagesrc}`)

        container.append(name, img)
        
    } catch (error) {
        console.error(error)
    }
}
btn.addEventListener('click', getData)