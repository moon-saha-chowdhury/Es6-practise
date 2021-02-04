const Person = {
    name :"john smith",
    age :32,
    address : "kochu khet",
    job : "facebooker",
    girlfriend: "Ema Watson",
    phone: 01829265303 

}
const {phone, age, girlfriend,address} = Person;
console.log(phone,address,age,girlfriend);

//destructure of an array
const friendsName = ['sakib khan','Amir Khan','Arman Khan','Omor Sunny'];
const [first,...restName] = friendsName; 
//aikhane first er jonno array er prothom elment store korbe & ... er mane rest element of an array
console.log(first,restName);

const complexObject ={
    name:"sultana",
    info:{
        address:"kola bagan",
        leader: "tiger leader"
    }
}
const {leader} = complexObject.info;
console.log(leader);