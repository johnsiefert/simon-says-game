const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
    nextSequence();
      started = true;
    }

  });

//clicks colors by id
$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
 });


 const checkAnswer = (currentLevel) => {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

if(gamePattern.length === userClickedPattern.length) {
    setTimeout(function () {
nextSequence()
 }, 1000);
}
    } else {
         console.log("wrong")
    }
    }
    // $(document).keypress(function (event) {
    //     if(String.fromCharCode(event.which)==='a'){
    //         console.log(nextSequence())
    //     }
    // })

//keypress random colors
const nextSequence = () => {

  userClickedPattern = [];

    level++;
$("#level-title").text("Level " + level);

let randomNumber = Math.floor(Math.random() * 4);
let randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor)

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

}

const playSound = (name) => {
    let audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}


//adds flash animation when press/clicked
const animatePress = (currentColor) => {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }




