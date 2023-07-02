const navbar = document.getElementById("primary-navigation")
const toggle = document.getElementById("nav")
const visibility = nav.getAttribute("data-visible")
const toggleBtnIcon = document.getElementById('Toggle')
let checked = "false";    

toggle.onclick = function() {

    if(checked == "false"){
        toggleBtnIcon.className = 'fa-solid fa-xmark'
        navbar.style.visibility = 'visible'
        checked = "true";
    } else {
        console.log(visibility)
        toggleBtnIcon.className = 'fa-solid fa-bars'
        navbar.style.visibility = 'hidden'
        checked = "false"
    }

}