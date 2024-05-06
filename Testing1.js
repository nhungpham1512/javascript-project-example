// let myArray =[1,'nhung',2,'sun'];
// myArray.splice(2,1);
// console.log(myArray);

let myArray =[1,2,3,4,5,6,7,8,9];
let evenArray =[];
let oddArray =[];

for(let i= 0;i< myArray.length; i++)
{
    if (myArray[i]%2==0){
        //evenArray+= myArray[i];
        evenArray.push(myArray[i]);
    }
    else{
        //oddArray+= myArray[i];
        oddArray.push(myArray[i]);
    }
}
console.log(evenArray);
console.log(oddArray);