let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', () => {
    const guess = Number(document.getElementById('guessInput').value);
    attempts++;
    let feedback = '';

    if (guess === randomNumber) {
        feedback = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
    } else if (guess > randomNumber) {
        feedback = 'Seu palpite é muito alto!';
    } else {
        feedback = 'Seu palpite é muito baixo!';
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('attempts').textContent = `Tentativas: ${attempts}`;
});

document.getElementById('restartButton').addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Tentativas: 0';
});
