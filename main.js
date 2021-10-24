const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
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
    player: 2,
    name: 'Sub-zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'Fist',
        'Sword'
    ],
    attack: function() {
        console.log(this.name + ' Fight');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {

    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHp(player) {
    const playerLife = document.querySelector('.player' + player.player +' .life');
    const hit = getRandomInt(1, 20);

    player.hp = player.hp - hit <= 0 ? 0 : player.hp - hit;
    // player.hp -= 20;
    playerLife.style.width = player.hp + '%';
    console.log(player.hp);

    if (player.hp <= 0) {
        // $arenas.appendChild(playerLose(player.name))

        const $names = Array.from($arenas.querySelectorAll('.progressbar .name'));
        let winName = '';
        $names.map(item => {
            if ( item.innerText.toLowerCase() !== player.name.toLowerCase() ) {
                winName = item.innerText;
            }
        });

        $arenas.appendChild(playerWins(winName));
        $randomButton.disabled = true;
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'loseTitle');
    $winsTitle.innerText = name + ' wins!';

    return $winsTitle;
}

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * ( max + 1 - min ));
}

$randomButton.addEventListener('click', function() {
    console.log('Random!');

    changeHp(player1);
    changeHp(player2);    
})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
