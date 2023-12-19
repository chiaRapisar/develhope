const btn = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body')
const p =document.createElement('p')

function Wellcome() {
    if(input.value.length>3){
      body.appendChild(p)
      p.innerHTML = `Wellcome ${input.value}`
      input.value=''
    } else {
      console.log('inserisci dato')
    }
    
  }
  
  btn.addEventListener('click', Wellcome )


//DALLA LIVE
//   btn.addEventListener('click', ()=>{
//     if(input.value.length>3){
//         p.textContent = `Wellcome ${input.value}`
//         body.appendChild(p)
//     } else {
//         allert('inserisci almeno 3 caratteri')
//     }
//   })