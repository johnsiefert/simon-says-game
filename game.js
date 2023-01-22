const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
    nextSequence();
      started = true;
    }
  });

//clicks colors by id
$(".btn").on("click", function(){
    const userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    })

    // $(document).keypress(function (event) {
    //     if(String.fromCharCode(event.which)==='a'){
    //         console.log(nextSequence())
    //     }
    // })

//keypress random colors
const nextSequence = () => {

    level++;
$("#level-title").text("Level " + level);

const randomNumber = Math.floor(Math.random() * 4);
const randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor)

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

}

const playSound = (name) => {
    let audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}


//adds flash animation when press/clicked
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


