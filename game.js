const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];



const nextSequence = () => {
const randomNumber = Math.floor(Math.random() * 4);
const randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor)


}
nextSequence()