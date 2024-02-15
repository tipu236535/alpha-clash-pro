// function play() {
//     // console.log('play start now')
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden');

//      const playGround = document.getElementById('play-ground');
//      playGround.classList.remove('hidden')
// }

function handelKeyboardButtonPressed(event) {
    const playerPressed = event.key
    console.log('player pressed', playerPressed);
    if(playerPressed === 'Escape'){
        gameOver();
    }
   const currentAlphabetElement = document.getElementById('current-alphabet')
   const currentAlphabet =currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
   console.log(playerPressed, expectedAlphabet);


   if(playerPressed===expectedAlphabet){
    console.log('you get a point')

const currentScore = getTextElementValueById('current-score')
// console.log(currentScore);
const updateScore = currentScore + 1;
setTextElementValueById('current-score',updateScore);



    // //    new score
//    const currentScoreElement = document.getElementById('current-score');
//    const currentScoreText =currentScoreElement.innerText;
//    const currentScore =parseInt(currentScoreText)
//    console.log(currentScore);
// //    new score set
// const newScore =currentScore + 1;
// currentScoreElement.innerText = newScore;

   
   
   
    console.log('you have pressed correctly', expectedAlphabet);
   removeBackgroundColorById(expectedAlphabet)
   continueGame();
}else{
    console.log('you missed')



    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife -1;
    setTextElementValueById('current-life',updateLife);
if(updateLife===0){
    gameOver();
}
//     // life setup 
// const currentLifeElement = document.getElementById('current-life');
// const currentLifeText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifeText);
// // new life 
// const newLife = currentLife - 1;
// // display the update new life
// currentLifeElement.innerText = newLife;

   }
}
document.addEventListener('keyup',handelKeyboardButtonPressed);

function continueGame() {
    const alphabet =getARandomAlphabet();
    // console.log('your random alphabet',alphabet)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function play() {
    
    hiddenElementById('home-section');
    hiddenElementById('final-score')
    showElementById('play-ground');
    
    // reset score
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}
function gameOver() {
    hiddenElementById('play-ground')
    showElementById('final-score')
    const lastScore =getElementTextById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore)
const currentAlphabet = getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);
 }