let menu = document.querySelector(".nav-links")
let menuBtn = document.querySelector(".nav__icon")
let menuBtnIcon = document.querySelector(".nav__icon i")

menuBtn.addEventListener("click", function(){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-288px"
        menuBtnIcon.classList = "fa fa-bars"
    }
}
)