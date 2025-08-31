let score = JSON.parse(localStorage.getItem("score")) || 
    {
        wins:0,
        Losses: 0,
        Ties:0
    }


function update_score(){
    document.querySelector('.js-score')
        .innerHTML = `Wins = ${score.Wins} Losses = ${score.Losses} Ties = ${score.Ties}`;
}
update_score()

function playGame(userChoice) {
    const randomNumber = Math.random();
    let computerMove = '';
    if( randomNumber >= 0 && randomNumber< 1/3){
        computerMove = "Rock";
    }else if(randomNumber >= 1/3 && randomNumber< 2/3){
        computerMove = "Paper";
    }else if (randomNumber >= 2/3 && randomNumber<1){
        computerMove = "Scissors";
    }
    let result = '';
    if(userChoice == computerMove){
        result = 'Tie.';
        score.Ties += 1;
    } else if ((userChoice === 'Rock' && computerMove === 'Scissors') || 
        (userChoice === 'Paper' && computerMove === 'Rock') ||
        (userChoice === 'Scissors' && computerMove === 'Paper')){
        result = 'You win!';
        score.Wins += 1;
    } else {
        result = 'You lose.';
        score.Losses +=1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    update_score();
    document.querySelector('.js-result').innerHTML =`${result}`;
    document.querySelector('.js-moves').innerHTML 
        =`You
    <img src="images/${userChoice}-emoji.png" 
    class = "move-icon">
    <img src="images/${computerMove}-emoji.png" 
    class = "move-icon">
    Computer`;
}