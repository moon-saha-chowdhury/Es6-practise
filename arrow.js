// function doubleIt(num){
//     return num*2;
// }  aita k bole function expression 

//amra chaile function k akta variable a declare korte pari tokhon seta function declaration

// const doubleIt = function(num){
//       return num*2;
// }

//but ES6 a amra aita keu easily kore felte pari

const doubleIt = name => name*2;
const result = doubleIt(7);
console.log(result);

const add =(a,b) => a+b;
const result1 = add(5,5);
console.log(result1);

const give10 = () => 5;
const result2 = give10();
console.log(result2); 

const doMath = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const total = sum*sub;
    return total;
}
const result3 = doMath(10,5);
console.log(result3);
