let numberArray=[125,555,44];

    let billArray = numberArray.map(bill => {
        return tip = (bill>= 50 && bill<=300)?  bill* 0.15: bill* 0.20;  
    }
    );
   console.log(billArray) 


// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); 

