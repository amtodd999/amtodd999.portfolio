let firstHi = "Hi. My name is Angie.";
let hi = firstHi.split("");
let typing = document.getElementById("intro");
let firstSlogan = "Let's make a website";
let slogan = firstSlogan.split("");
let typing2 = document.getElementById("slogan");
let formBtn = document.getElementById("form-button");
let contactForm = document.getElementById("contact-form");



function animateSlogan() {
    if (slogan.length > 0) {
        typing2.innerHTML += slogan.shift()
        setTimeout(animateSlogan, 90);
    }
};

function animateHi() {
    if (hi.length > 0) {//for the length of the text
        typing.innerHTML += hi.shift()//REMOVE the 1st element in the array & return it
        setTimeout(animateHi, 90); //calls (animateHi) and evaluates the expression
    } else {
        animateSlogan();
    }
};
animateHi();

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.submit();
    contactForm.reset();
})

