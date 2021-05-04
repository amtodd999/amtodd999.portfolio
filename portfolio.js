var firstHi = "Hi. My name is Angie.";
var hi = firstHi.split("");
var typing = document.getElementById("intro");
var firstSlogan = "Let's make a website";
var slogan = firstSlogan.split("");
var typing2 = document.getElementById("slogan");


function animateSlogan() {
    if (slogan.length > 0) {
        typing2.innerHTML += slogan.shift()
        setTimeout(animateSlogan, 90);
    } console.log(`here`);
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


