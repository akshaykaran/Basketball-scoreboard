let homeScore = document.getElementById('home-score')

let guestScore = document.getElementById('guest-score')


let count = 0
let count2 = 0

function add1(){
    count += 1
    homeScore.textContent = count
}

function add2(){
    count += 2
    homeScore.textContent = count
}

function add3(){
    count += 3
    homeScore.textContent = count
}

function addd1(){
    count2 += 1
    guestScore.textContent = count2
}

function addd2(){
    count2 += 2
    guestScore.textContent = count2
}

function addd3(){
    count2 += 3
    guestScore.textContent = count2
}