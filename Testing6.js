var dolphinScoreRound1 = prompt('team Dolphin score lan 1:');
var dolphinScoreRound2 = prompt('team Dolphin score lan 2:');
var dolphinScoreRound3 = prompt('team Dolphin score lan 3:');

var kolasScoreRound1 = prompt('team Kolas score lan 1:');
var kolasScoreRound2 = prompt('team Kolas score lan 2:');
var kolasScoreRound3 = prompt('team Kolas score lan 3:');

let avarageDolphinScore = (Number(dolphinScoreRound1)+Number(dolphinScoreRound2)+Number(dolphinScoreRound3))/3

let avarageKolasScore = (Number(kolasScoreRound1)+Number(kolasScoreRound2)+Number(kolasScoreRound3))/3

let minAvarageScore = Math.min(avarageDolphinScore,avarageKolasScore)

if(avarageDolphinScore>avarageKolasScore && minAvarageScore>=100){
    alert("Dolphine team wins and scores "+ avarageDolphinScore.toFixed(2))
}
else if(avarageKolasScore>avarageDolphinScore && minAvarageScore>=100){
    alert("Kolas team wins and scores "+ avarageKolasScore.toFixed(2))
}
else if (avarageDolphinScore==avarageKolasScore && avarageDolphinScore>=100) {
    alert("Draws. Each team scores " + avarageDolphinScore.toFixed(2))
} 
else {
    alert("No team win and Dolphin scores "+ avarageDolphinScore.toFixed(2)+" Kolas scores "+ avarageKolasScore.toFixed(2))
} 