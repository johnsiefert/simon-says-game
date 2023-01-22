const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];



$(".btn").on("click", function(){
    const userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    })



const nextSequence = () => {

const randomNumber = Math.floor(Math.random() * 4);
const randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor)

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor)
}

const playSound = (name) => {
    let audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}





$(document).keypress(function() {

    nextSequence();

});