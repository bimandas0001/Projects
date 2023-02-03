// Audio files
var audio = [];
audio[0] = new Audio("sounds/tom1.mp3");
audio[1] = new Audio("sounds/tom2.mp3");
audio[2] = new Audio("sounds/tom3.mp3");
audio[3] = new Audio("sounds/tom4.mp3");
audio[4] = new Audio("sounds/crash.mp3");
audio[5] = new Audio("sounds/kick.mp3");
audio[6] = new Audio("sounds/snare.mp3");

// Click - Event listener
var target = document.querySelectorAll("div.container button");

for(var i=0; i<target.length; i++){
    target[i].addEventListener("click", function() {
        makeSound(this.classList[0]);
    });
}

// Key press - Event listener
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});


// Make Sound
function makeSound(drum){
    makeAnimation(drum);

    var drumList = "wasdjkl";
    for(var i=0; i<drumList.length; i++){
        if(drum === drumList[i] || drum.toLowerCase() === drumList[i]){
            audio[i].play();
        }    
    }
}

// Make Animation
function makeAnimation(drum){
    var ele = document.querySelector("." + drum);
    
    ele.classList.add("clicked");

    setTimeout(function () {
        ele.classList.remove("clicked");
    }, 180);
}