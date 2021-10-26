let btnChecked = document.querySelector("#menu-toggle");
btnChecked.addEventListener("click", function(event) {
let divWelcomeTitleBtn = document.querySelector("#welcome > div > div > div.welcome-title-and-button");
    if(event.target) {
        divWelcomeTitleBtn.classList.toggle("welcome-none");
    } else {
        divWelcomeTitleBtn.classList.toggle("welcome-none");
    }
})