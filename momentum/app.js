function sayHi(nameOfPerson, age){
    console.log("Hi my name is "+ nameOfPerson + "and I'm " + age);
}

sayHi("jimyu", 23);

function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function divide(firstNum, secondNum) {
    console.log(firstNum / secondNum);
}

plus(3, 6);

const player = {
    name: "jimyu",
    sayHi: function(otherPersonName){
        console.log("hi!" + otherPersonName + "nice to meet you");
    }
}

console.log(player.name);
player.sayHi("meow");