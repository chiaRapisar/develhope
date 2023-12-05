
function fetchUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const UserData= {id:1, name:'John'}
            resolve(UserData)
        }, 1000);
    })
    
}
function fetchUserPosts(userId, useriName) {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            const UserPosts =['Post 1','Post 2','Post 3']
            resolve(UserPosts)
        }, 2000);
    })
}

fetchUserData()
.then(userData=>{
    console.log(userData.name);
    return fetchUserPosts(userData.id, userData.name);

})
.then(userPosts => {
    console.log(`Post dell'utente:`, userPosts);
})
.catch(err => console.error(err))



//----
// .then(data=>{
//     data.forEach(element=>{
//         console.log(element);
//     })
// })
// .catch(err => console.error(err))
// //oppure
// async function fetchData() {
//     const userData = await fetchUserData()
//     const userPosts = await fetchUserPosts(userData.id, userData.name)
    
//     console.log(userData.name);
//     userPosts.forEach(element=>{
//         console.log(element)
//     })
// }

// fetchData()