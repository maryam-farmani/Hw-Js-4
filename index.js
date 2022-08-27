"use strict";

const userName = "maryam" ;
console.log(userName);

let person = "";
const input = prompt("enter your name");
person = input
console.log(person);


// string
const string1 = "zahra";
const string2 = 'nazi';
const string3 = `sheida`;
console.log(string1, string2, string3);

console.log(typeof string1 , typeof string2, typeof string3);


// namber
const birthDay = 2003;
console.log("birthday=", birthDay);

const age = 2022-birthDay;
console.log("age=", age);


// boolean=> true/false
const isMarried = false;
console.log(isMarried);


// null
let user_age = null;
const user_birthDay = prompt("whats your birthday?");
user_age = 2022 - user_birthDay;
console.log(user_age);

 
// operators => / , - , + , * , % , **
const x = 12;
const y = 6;

const jam = x + y ;
console.log("12+6=", jam);

const tfrigh = x - y ;
console.log("12-6=", tfrigh);

const zarb = x * y ;
console.log("12*6=", tfrigh);

const taghsim = x / y ;
console.log("12/6=", taghsim);

const tavan = x ** y ;
console.log("12**6=", tavan);

const baghiMande = x % y ;
console.log("12%6=", baghiMande);

// 200 sanie chand daghighe va chand sanie?
const secound = 200;
const minutes = 200/60;
console.log(minutes);
const overSecounds = 200%60;
console.log(overSecounds);


// comparison operators
let a = 100;
let b = "100";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);

// conditions
if (user_age>=18) {
    console.log("vared shavid.");
} else {
    console.log("vared nashavid.");
}

switch (user_age) {
    case 18:
        console.log("adad 1  ra vare konid!");
        break;
    
    case 19:
        console.log("adad 2 ra vared konid!");
        break;    

    case 20:
        console.log("adad 3 ra vared konid!");
        break;  

    default:
        console.log("adad 0 ra vared konid!");
        break;
}


// &&
if (age && isMarried) {
    console.log("good");
}else {
    console.log("bad");
}

// ||
if (age || isMarried) {
    console.log("good");
}else {
    console.log("bad");
}


console.log(Boolean(user_age));

if (input) {
    console.log("shoma name khod ra vared kardid!");
}else{
    console.log("lotfan name khod ra vared konid!")
}

// calculator
const number1 = +prompt("number1");
const operator = prompt("operator");
const number2 = +prompt("number2");
let result = 0;

switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    
    case "-":
        result = number1 - number2;
        break;    

    case "/":
        result = number1 / number2;
        break;
        
    case "*":
        result = number1 - number2;
        break; 

    default:
        result = NaN;
        break;
}
console.log(number1);
console.log(operator);
console.log(number2);
console.log(result);


const test = input + user_age + "sale ast";
console.log(test);

const test1 = `${input} ${user_age} sale ast.`
console.log(test1);



// function
function naming() {
   console.log("hi");
}
naming();


function naming2(yechizi) {
    return yechizi
}
const me = naming2("salam");
console.log(me);


function mive(folan= "sib") {
    console.log(folan);
}
mive();


function sum(a=0 , b=0) {
    return a+b
}
const result1 = sum(4,9)*100;
console.log(result1);


function sum2(r=0,t=0) {
    console.log(r+t);
}
sum2(50,7);



// Object
const car = {
    nameCar : "juke",
    brandCar : "neisan",
    colorCar : "gold",
    saftyCar : true,
    priceCar : 21000,

    moveCar : function() {
        console.log(this.brandCar + "move");
    },

    beep : function() {
        console.log(this.nameCar + "boogh");
    }
}
car.nameCar= "gt86";
console.log(car);
console.log(car["nameCar"]);
car.moveCar();
car.beep();


// array
const persons = ["sara" , "fati" , "zahra" , "mahta"];
console.log(persons);
console.log(persons[1]);


window.setInterval(function() {
    console.log("run");
} , 1000);


function one(name) {
    console.log(name);
}
one("sahel");


const saymyname = function two(name) {
    console.log(name);
}
saymyname("mina");
 

const sumMe = (h,j) => {
    return h/j;
}
console.log(sumMe(30,3));

const summe1 = (c,v) => c*v;
console.log(summe1(8,10));

const xname = name => name;
console.log(xname("sara"));

const names = {
    fullName : "maryam farmani",
    sayfullName : function () {
        console.log(this.fullName);
    }
}
console.log(names);
names.sayfullName();

const list = [10,20,30,40,50,60];
console.log(list);
console.log(list.pop());
console.log(list);
list.push(70);
console.log(list);


const sumTest = 20 * undefined ;
console.log(sumTest);
console.log(isNaN(sumTest));

if (isNaN(sumTest)) {
   console.error("sumtest is not a number"); 
};

// scop

// global scop
const herName = "shiva";
console.log(herName);

// functin scop
function sheName() {
    const  hName = "mahsa";
    console.log(hName);
}
sheName();
 

// block scope
{
    const guest = "guest";
    console.log(guest);
}

const calculator1 = {
    result : 0,
    numberOne : 40,
    numberTwo : 10,

    sumC () {
        this.result = this.numberOne + this.numberTwo;
    },

    menha () {
        this.result = this.numberOne - this.numberTwo;
    },

    multiply () {
        this.result = this.numberOne * this.numberTwo;
    },

    kasr () {
        this.result = this.numberOne / this.numberTwo;
    },


};
console.log(calculator1);
calculator1.sumC();
console.log(calculator1.result);


// for
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + " hello ");
}

for (const iterator of persons) {
    console.log(iterator + " hello");
}

for (const key in persons) {
    console.log(key , persons[key]);
}

for (const key in car) {
    console.log(key , car[key]);
}


// forEach
persons.forEach(function(value , index){
    console.log(value , index);
});

persons.forEach((value,index)=> console.log(value,index));
