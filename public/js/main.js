let start_btn = document.getElementById('start-game')
start_btn.addEventListener('click', initializeGame)

let reset_btn = document.getElementById('restart-game')
reset_btn.addEventListener('click', resetGame)

let red_car = document.getElementById('red-car')
let yellow_car = document.getElementById('yellow-car')

let yellow_fuel = document.getElementById('fuel-1')
let red_fuel = document.getElementById('fuel-2')

let keysPressed = {};

var is_start = false
var is_finished = false

var red_pos = 0
var yellow_pos = 0

function initializeGame() {
    // Traffic light countdown

    let countdown_3 = document.getElementById('light-1')
    let countdown_2 = document.getElementById('light-2')
    let countdown_1 = document.getElementById('light-3')

    countdown_3.style.backgroundColor = 'red'
    setTimeout(function () {
        countdown_2.style.backgroundColor = 'yellow'
        setTimeout(function () {
            countdown_1.style.backgroundColor = 'green'
            is_start = true
            red_car.classList.toggle('car_runing')
            yellow_car.classList.toggle('car_runing')
        }, 1000)
    }, 1000)
}

// 1170 px để chiến thắng

document.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
    if (is_start == true && is_finished == false) {
        if (keysPressed['d']) {
            if (yellow_pos < 1170) {
                yellow_car.style.left = yellow_pos + 5 + 'px';
                yellow_pos += 5
                yellow_fuel.style.width = 120 - (120 / 1170 * yellow_pos) + 'px'
            } else {
                alert("Xe vàng đã cán đích")
                is_finished = true
            }
        }
        if (keysPressed['ArrowRight']) {
            if (red_pos < 1170) {
                red_car.style.left = red_pos + 5 + 'px';
                red_pos += 5
                red_fuel.style.width = 120 - (120 / 1170 * red_pos) + 'px'
            } else {
                alert("Xe đỏ đã cán đích")
                is_finished = true
            }
        }
    }
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });

function resetGame() {
    // Traffic light back to white (rhyme)
    let traffic_light = document.getElementsByClassName('light')
    for (var i = 0, len = traffic_light.length; i < len; i++) {
        traffic_light[i].style["background-color"] = 'white';
    }

    keysPressed = {}
    
    yellow_car.style.left = '0px'
    red_car.style.left = '0px'
    
    yellow_fuel.style.width = '120px'
    red_fuel.style.width = '120px'

    yellow_pos = 0
    red_pos = 0

    is_start = false
    is_finished = false

    red_car.classList.toggle('car_runing')
    yellow_car.classList.toggle('car_runing')
}

// Xe rung
// Xăng giảm