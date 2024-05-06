var dolphinScoreRound1 = prompt('team Dolphin score lan 1:');
var dolphinScoreRound2 = prompt('team Dolphin score lan 2:');
var dolphinScoreRound3 = prompt('team Dolphin score lan 3:');

var kolasScoreRound1 = prompt('team Kolas score lan 1:');
var kolasScoreRound2 = prompt('team Kolas score lan 2:');
var kolasScoreRound3 = prompt('team Kolas score lan 3:');

let avgDolphinScore = ((Number(dolphinScoreRound1)+Number(dolphinScoreRound2)+Number(dolphinScoreRound3))/3).toFixed(2)
let avgKolasScore = ((Number(kolasScoreRound1)+Number(kolasScoreRound2)+Number(kolasScoreRound3))/3).toFixed(2)

function checkWiner(avgDolphinScore,avgKolasScore){
    if(avgDolphinScore >= avgKolasScore*2){
        return ('Dolphin wins '+ avgDolphinScore +" vs "+avgKolasScore)
    }
    else if (avgKolasScore>=avgDolphinScore*2){
        return ('Kolas wins '+ avgKolasScore +" vs "+avgDolphinScore)
    }
    else{
        return ('No team wins')
    }
}
alert(checkWiner(avgDolphinScore,avgKolasScore));