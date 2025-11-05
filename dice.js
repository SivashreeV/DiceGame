function randomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
}

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const heading = document.querySelector('h1');

function gameStart() {
    const dice1 = randomDiceValue();
    const dice2 = randomDiceValue();

    img1.setAttribute('src', `images/dice${dice1}.png`);
    img2.setAttribute('src', `images/dice${dice2}.png`);

    if(dice1>dice2){
        heading.textContent = "🚩 Player 1 Wins!";
    }else if(dice2>dice1){
        heading.textContent = "Player 2 Wins! 🚩";
    }else{
        heading.textContent = "It's a Draw! Roll Again!";
    }
}
