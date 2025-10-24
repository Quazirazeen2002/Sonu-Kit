var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "s":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "o":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "u":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play(); // Fixed: was tom2.play()
      break;

    case "c":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "a":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "t":
      var kick = new Audio("kick.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}


