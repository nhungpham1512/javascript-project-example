let number = prompt("please input your bill");
bill= parseFloat(number);
let tip = 0;

function caculateTips(bill){
    return bill>= 50 && bill<=300? bill* 15/100:  bill* 20/100;
};

tip = caculateTips(bill);
let total= bill + tip;
alert('The bill was '+ bill + ', the tip was '+ tip +', and the total was '+ total)

