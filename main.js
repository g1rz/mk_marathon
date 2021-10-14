const player1 = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'Fist',
        'Chain'
    ],
    attack: function() {
        console.log(this.name + ' Fight');
    }
};

const player2 = {
    name: 'Sub-zero',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'Fist',
        'Sword'
    ],
    attack: function() {
        console.log(this.name + ' Fight');
    }
};

function createPlayer(playerClass, playerObj) {

    const $arenas = document.querySelector('.arenas');

    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObj.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;

    const $img = document.createElement('img');
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player1.appendChild($progressbar);
    $player1.appendChild($character);


    $arenas.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);