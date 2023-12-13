const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

function addProduct() {
  if(input.value !=''){
    const li =document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = `${input.value} <input type="checkbox" name="check" id="check">`
    input.value=''
  } else {
    console.log('inserisci un dato')
  }
  
}

btn.addEventListener('click', addProduct )


