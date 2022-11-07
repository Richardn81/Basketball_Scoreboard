let homeScorebtn1 = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0 

function add1Home(){
    homeScore +=1
    homeScoreEl.textContent = homeScore
    console.log("btn 1 clicked")
}
function add2Home(){
    homeScore +=2
    homeScoreEl.textContent = homeScore
    console.log("btn 2 clicked")
}
function add3Home(){
    homeScore +=3
    homeScoreEl.textContent = homeScore
    console.log("btn 3 clicked")    
}

let awayScoreBtn1 = document.getElementById("away-score-btn-1")
 console.log("btn 1 clicked")
let awayScoreEl = document.getElementById("away-score")
let awayScore = 0

function add1Away(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
    console.log("btn 1 clicked")
}

function add2Away(){
    awayScore += 2
    awayScoreEl.textContent = awayScore
    console.log("btn 2 clicked")
}

function add3Away(){
    awayScore += 3
    awayScoreEl.textContent = awayScore
    console.log("btn 3 clicked")
}