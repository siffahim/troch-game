const playerOne = document.getElementById('playOne');
const playerTwo = document.getElementById('playTwo');
const message = document.getElementById('header');

document.onkeydown = function(event){
    if (event.keycode == 123) {
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keycode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keycode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (event.ctrlKey && event.keycode == 'U'.charCodeAt(0)) {
        return false;
    }
}

const luduGame = () => {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const imgOne = `img/dice${play1}.png`;
    playerOne.setAttribute('src', imgOne);


    const play2 = Math.floor(Math.random() * 6) + 1;
    const imgTwo = `img/dice${play2}.png`;
    playerTwo.setAttribute('src', imgTwo);

    
    if (play1 > play2) {
        message.innerText = 'Player1 Win!'
    }
    else if (play1 < play2) {
        message.innerText = 'Player2 Win!'
    }
    else {
        message.innerText = 'Draw!'
    }
}