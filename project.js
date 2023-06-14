const overlayMenu = document.querySelector('.overlay')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')
openMenu.addEventListener('click', () => {
    overlayMenu.classList.add('open')
})
closeMenu.addEventListener('click', () => {
    overlayMenu.classList.remove('open')
})
const header = document.querySelector('.header')
window.addEventListener("scroll", () => {
    const scroll = window.scrollY
    if(scroll < 150){
      header.classList.remove('window')
    }
    else{
        header.classList.add('window')
    }
})
const girl1 = document.getElementById('laura')
const girl2 = document.getElementById('kerri')
const girl3 = document.getElementById('farren')
const laura = document.querySelector('.picture')
const textGirls = document.querySelector('.text')
laura.addEventListener("click", () => {
    girl1.setAttribute('src', '/girls/laura-robinson.png')
})
girl2.addEventListener("click", function(){
    girl1.setAttribute('src', '/girls/kerri-nelson.png')
    textGirls.innerText = "Finn prioritizes the best quality ingredients and makes it easy for pet owners to find supplements that will benefit their companion animals.”"
})
girl3.addEventListener("click", function(){
    girl1.setAttribute('src', '/girls/farren-billand.png')
    textGirls.innerText = "Our pets' best interest was truly in mind during the creation of these supplements.”"
})
AOS.init();
const formEl = document.querySelector('.form')
const emailEl = document.getElementById('email')
function showError(input, message){
    input.className = "is-invalid"
    const div = input.nextElementSibling
    div.innerText = message
    div.style.color = "#fff"
}
function showSuccess(input){
    input.className = "is-valid"
}

function checkEmail(emailAddress){
    const regularExpresssion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regularExpresssion.test(emailAddress.value.trim())){
        showSuccess(emailAddress)
    }
    else{
        showError(emailAddress, "email address is not defined, please try again")
    }

}
formEl.addEventListener("submit", function(e){
e.preventDefault()
checkEmail(emailEl)
})

window.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".konteyner").style.display = "none"
  setTimeout(function(){
    document.querySelector('.loader').style.display = "none"
    document.querySelector('.konteyner').style.display = "block"
  }, 5000)
})
