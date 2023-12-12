const input= document.querySelector('#todoInput');
const button= document.querySelector('.add');
const reset = document.querySelector('.reset')
const list = document.querySelector('.list')

function getValue(){
    if(input.value !=''){
    const value=input.value
const li =document.createElement('li')
li.innerHTML = `<li>${value}</li>`
list.appendChild(li)
    input.value = ''
    console.log(value);
} else {
    console.log(`inserisci un todo`)
}}
button.addEventListener('click', getValue)


// function addValue(){
// const newValue= document.createElement('')
// ul.appendChild()
// }

// button.addEventListener('click', ()=>
// const value=input.value
// console.log(value))
