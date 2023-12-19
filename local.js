const btn = document.querySelector('.btn')
const email = document.querySelector('.email')
const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const titleName = document.querySelector('.title-name')

window.onload = function() {
    const localData = JSON.parse(localStorage.getItem('userData'));
    if (localData) {
        titleName.textContent = localData.firstname
    }
};
function saveData() {
const userData = {
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value,
    }
    localStorage.setItem('userData', JSON.stringify(userData))

    titleName.textContent = firstname.value
}

btn.addEventListener('click', saveData)