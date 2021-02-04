function add(num1, num2 = 20){
    //num2 = num2|| 0; 
    //orthat num2 er value num2 hobe or parameter na dile by default 0 hobe

    return num1 + num2;
}
const total = add(15);
console.log(total);