let billsArray =[125,555,44];


function caculateTipsArray(billsArray){    
    let tipArray=[];
    billsArray.forEach(bill => {  
        let tip=0;    
        tip = (bill>= 50 && bill<=300)?  bill* 0.15: bill* 0.20;  
        tipArray.push(tip)           
    });    
    return tipArray;
}

console.log(caculateTipsArray(billsArray));