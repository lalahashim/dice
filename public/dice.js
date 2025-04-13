function rollDice() {
    const diceImages = document.querySelectorAll('.dice-img');
    const results = [];
    const playerNames = [];

    diceImages.forEach((img, index) => {
        const roll = Math.floor(Math.random() * 6) + 1;
        img.setAttribute("src", `/images/dice${roll}.png`);
        results.push(roll);

        // Получаем имя игрока из data-атрибута
        playerNames.push(img.getAttribute('data-player-name'));
    });

    changeTitle(results, playerNames); // передаем сюда имена игроков
}

function changeTitle(results, playerNames) {
    if (results.length === 1) {
        document.querySelector("h1").textContent = `You rolled a ${results[0]}!`;
    } else {
        let max = Math.max(...results);
        let winners = results.reduce((acc, val, idx) => {
            if (val === max) acc.push(playerNames[idx]); // Теперь добавляем имена игроков, а не их номера
            return acc;
        }, []);

        if (winners.length === 1) {
            document.querySelector("h1").textContent = `${winners[0]} Wins! 🎉`;
        } else {
            document.querySelector("h1").textContent = `Draw between ${winners.join(" & ")}!`;
        }
    }
}
