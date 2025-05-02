function addPlayer() {
    const ul = document.getElementById('team-list');

    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    const li = document.createElement('li');
    li.textContent = `${position} - ${name} - ${number}`;
    li.classList.add(`player-${number}`);

    const escalar = prompt(`Você quer escalar ${name} como ${position}? sim/não`).toLocaleLowerCase();

    if (escalar === 'sim') {
        ul.appendChild(li);
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}

function removePlayer() {
    const ul = document.getElementById('team-list');

    const number = document.getElementById('numberToRemove').value;

    const removePlayerLi = `player-${number}`;
    const li = document.querySelector(`.${removePlayerLi}`);

    const remover = prompt(`Você quer remover ${li.textContent}? sim/não`).toLocaleLowerCase();

    if (remover === 'sim') {
        ul.removeChild(li);
        document.getElementById('numberToRemove').value = '';
    } else {
        alert('Jogador não encontrado!');
        document.getElementById('numberToRemove').value = '';
    }
}
