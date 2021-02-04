class Parent{
    constructor(){
        this.lastName ="chowdhury";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name+ " " + this.lastName;
    }
}

const baby = new Child('Moon');
const baby2 = new Child('Mou');
console.log(baby.getFullName());
console.log(baby2);