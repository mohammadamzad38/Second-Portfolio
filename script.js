const menuIcon = document.querySelector("#menue-icon")
const navLink = document.querySelector(".nav-link")

menuIcon.onclick = () =>{
    navLink.classList.toggle("active")
}
