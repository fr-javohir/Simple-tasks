const barBtn = document.getElementById('bar-menu')
const navbar = document.querySelector('.navigation')
const overlay = document.querySelector('.overlay')
const icon = document.querySelector('.icon-menu')

let toggle = false
barBtn.addEventListener('click', function(){
    if(!toggle){
        navbar.style.zIndex = '3'
        navbar.style.opacity = '1'
        toggle = !toggle
        overlay.style.zIndex = '2'
        overlay.style.opacity = '1'
        icon.src = 'images/icon-close.svg'
    }
    else{
       removeMenu()
    }
})
    
overlay.addEventListener('click',removeMenu)
function removeMenu(){
    navbar.style.zIndex = '-1'
    navbar.style.opacity = '0'
    toggle = !toggle
    overlay.style.zIndex = '-1'
    overlay.style.opacity = '0'
    icon.src = 'images/icon-hamburger.svg'

}