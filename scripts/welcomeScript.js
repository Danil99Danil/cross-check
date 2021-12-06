// let btnChecked = document.querySelector("#menu-toggle");
// let divWelcomeTitleBtn = document.querySelector("#welcome > div > div.welcome-title-and-button");
// let welcomeNoBtn = document.querySelector("#welcome > div > div.welcome-title-none-button");
// let welcomeContent = document.querySelector("#welcome > div > div.welcome-container");
// let welcomeSlider = document.querySelector("#welcome > div > div > div.welcome-slider");
// let welcomeLink = document.querySelector("#welcome > div > div.welcome-social-network-none")
// let pad = document.querySelector("#welcome > div > div.welcome-slider > div > div");

// #welcome > div > div.welcome-title-none-button

// function deletTitle(){
//     if(welcomeContent.classList.contains("welcRed")) {
//         welcomeNoBtn.classList.remove("welcome-title-none-button")
//         welcomeNoBtn.classList.add("welcome-none")
//         welcomeLink.classList.remove("welcome-social-network-none")
//         welcomeLink.classList.add("welcome-social-network")

//     } else {
//         welcomeNoBtn.classList.remove("welcome-none")
//         welcomeNoBtn.classList.add("welcome-title-none-button")
//         welcomeLink.classList.remove("welcome-social-network")
//         welcomeLink.classList.add("welcome-social-network-none")
//     }   
// }

// btnChecked.addEventListener("click", function(event) {
//     if(event.target) {
//         divWelcomeTitleBtn.classList.toggle("welcome-none");
//     }  

//     if(window.screen.width <= 768) {
//         pad.style = null;
//         welcomeContent.classList.toggle("welcRed")
//         welcomeSlider.classList.toggle("welcome-none")
//     }
//     deletTitle()
// })
let wrapper = document.querySelector("#welcome > div");
let burgerBtn = document.querySelector("#menu-toggle");
let titleAndButton = document.querySelector("#welcome > div > div.welcome-title-and-button");
// let noWtitle1024 = document.querySelector("#welcome > div > div.welcome-title-none-button");
let titleNoButton = document.querySelector("#welcome > div > div.welcome-title-none-button");
let socialNetwork = document.querySelector('.welcome-social-network');
let welcomeSlider = document.querySelector('.welcome-slider');
let welcomeGallery = document.querySelector("#welcome > div > div.welcome-gallery.hide");
let welcomeGalleryItemSecond = document.querySelector(".welcome-gallery-second");
let welcomeGalleryItemSecondSwitch = document.querySelector(".welcome-gallery-second-420");
let welcomeGalleryItemThree = document.querySelector(".welcome-gallery-three");

function delTitle1024() {
    if(window.screen.width > 768 && window.screen.width <= 1024) {
        console.log("da");
        titleAndButton.classList.toggle("welcome-title-none-button")
    } 
}

function delTitle768() {
    if(window.screen.width <= 768) {
        console.log("daLOL");
        titleNoButton.classList.toggle("hide");
        socialNetwork.classList.toggle('hide');
        welcomeSlider.classList.toggle('hide');
        welcomeGallery.classList.toggle("hide");
        wrapper.style.padding = "0 55px";
    }
}

function delDiv420() {
    if(window.screen.width <= 420) {
        welcomeGalleryItemSecond.classList.toggle("hide");
        welcomeGalleryItemSecondSwitch.classList.toggle("hide");
        welcomeGalleryItemThree.classList.toggle("hide");
    }
}

function allFunction() {
    delTitle1024()
    delTitle768()
    delDiv420()
}

burgerBtn.addEventListener("click", function(event) {
    if(event.target) {
        allFunction();
    }
})