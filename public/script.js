const playersInput = document.getElementById('players');
const nicknamesContainer = document.getElementById('nicknames-container');

playersInput.addEventListener('input', () => {
    const numberOfPlayers = parseInt(playersInput.value);
    nicknamesContainer.innerHTML = '';

    if (!isNaN(numberOfPlayers) && numberOfPlayers >= 1 && numberOfPlayers <= 6) {
        for (let i = 1; i <= numberOfPlayers; i++) {
        const div = document.createElement('div');
        div.className = 'form-group nicknames';

        const label = document.createElement('label');
        label.className = 'form-label';
        label.textContent = `Player ${i}:`;
        label.setAttribute('for', `nickname${i}`);

        const textarea = document.createElement('textarea');
        textarea.id = `nickname${i}`;
        textarea.name = `nickname${i}`;
        textarea.rows = 1;

        div.appendChild(label);
        div.appendChild(textarea);
        nicknamesContainer.appendChild(div);
        }
    }
});
