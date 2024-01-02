const container=document.querySelector('.container')
async function getData(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        console.log(data)

        for (let index = 0; index < 10; index++) {
            const post = data[index];

            const card = document.createElement('div')
            card.classList.add('card');
            card.innerHTML=`<h2>${post.title}</h2>
                            <p> ${post.body}</p>`;
            container.appendChild(card);
            card.addEventListener('click',()=>{
                card.classList.toggle('selected');
                
            })
        }
    } catch (error){
        console.error(error)
    }
}
document.addEventListener('DOMContentLoaded', getData);