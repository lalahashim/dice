if (window.performance.navigation.type === 1) {
    rollDice();
}

function rollDice() {
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var image1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".dice .img1").setAttribute("src", image1);
    
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var image2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".dice .img2").setAttribute("src", image2);

    changeTitle(randomNumber1, randomNumber2);
}

function changeTitle(num1, num2) {
    if (num1 === num2) {
        document.querySelector("h1").innerHTML="Draw!";
    } else if (num1 > num2) {
        document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }
}