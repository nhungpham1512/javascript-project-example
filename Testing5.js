var mark ={
    name: 'Mark Cage',
    mass: 55,
    height:1.5,
    calcBMI: function(){
        return this.bmi = this.mass/Math.pow(this.height,2);
    }
}

var john = {
    name: 'John Smith',
    mass: 78,
    height:1.65,
    calcBMI(){
       return this.bmi = this.mass/Math.pow(this.height,2) ;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(john.bmi);
console.log(mark.bmi);

if(mark.calcBMI() >john.calcBMI()){
    console.log("Mark's BMI ("+ mark.calcBMI().toFixed(2)+ ") is higher than John's ("+ john.calcBMI().toFixed(2)+")")
}
else{
    console.log("Mark's BMI ("+ mark.calcBMI().toFixed(2) + ") is lower than John's ("+ john.calcBMI().toFixed(2)+")")
}

