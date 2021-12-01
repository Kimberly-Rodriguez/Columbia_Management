
// External files make your code organized and easier to maintain
console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");
  
  

  let studentName = "Kimberly";
  let studentAge = 33;


  console.log("Her name is " + studentName); 

  let personName = 'Juan';
  let pets = 1;
  let funFact = 'loves to run';

  console.log('My name is ' + studentName + '.');
  console.log('I have ' + pets + ' pet(s).');
  console.log('Fun fact: ' + funFact);

  //When re-assigning variables, use variables name
personName = 'Mateo';
pets = 5;
funFact = 'I was a yo-yo champ in third grade.';

console.log('My name is ' + personName + '.');
console.log('I have ' + pets + ' pet(s).');
console.log('Fun fact: ' + funFact); 

let isMyBooleanTrue = true; 

console.log(typeof isMyBooleanTrue);

let a = 100;
let b = 10;
let c = "10";

console.log(a + b);
console.log(a - b);
console.log(a/b);
console.log(a*b);

console.log(a%b);

console.log(b == c);
console.log(b !== c);

console.log(a > b);
console.log(a < b);

console.log(a <= b);
console.log(a >= b);

let expression1 = (b == c);
let expression2 = (a > b);

console.log(expression1 && expression2);

console.log(expression1 || expression2); 

console.log(expression2);

console.log(!expression2);


let hungerLevel = 50;
let isLunchTime = true;
let lunchBill = 11;

if (hungerLevel >= 50) {
  console.log("Hungry!");
}

if (!hungerLevel < 50) {
  console.log("Hungry, Hungry!");
}

if(hungerLevel <= 50) {
  console.log("Hungry again!");
}

if (!isLunchTime) {
  console.log("lunch time");
} else {
  console.log("Not Lunchtime");
}

if (hungerLevel){
  console.log('its lunch time!')
} else {
  console.log('its not lunch time')
}; 

let students = ["Juan", "Kim", "Sam", "Mattie", "Karla", "Briana"]

// console.log('the total number of students is '+ students.length)

// console.log('Welcome to class '+ students[0]);
// console.log('Welcome to class '+ students[1]);
// console.log('Welcome to class '+ students[2]);
// console.log('Welcome to class '+ students[3]);
// console.log('Welcome to class '+ students[4]);
// console.log('Welcome to class '+ students[5]);    

students[0]= 'Mark'
console.log(students);

if (students[0] === 'Juan' ) {
 console.log (students[0] + 'is still in class')
} else {
  console.log("is a new student by the name of ... " + students[0])
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }

// for (let i = 0; i < students.length; i++) {
//  console.log('you are my student named '+ students[i])
// }

// iterator let i = 0  --> its a variable that starts at 0 + iterator 
// condition i < 6 ---> as long as the value of i is less than 6 pls run the array
// incrementor i ++  --> add one to the value of i === i = i + 1
for (let i = 0; i < 6; i++) {
  console.log("this worked, thanks too ..." + students[i])
}; 

let array = ["fun", "happy", "joy", "springles"]

// for ( let i = 0; i < array.length; i++ ) {
//  console.log('I find joy in my love for' + array[i]); 
// }

// for (let i = 0; i < array.length; i++) {
//   const element = 'I work to always be ' + array[i];
//   console.log(element);
// }

for (let i = 0; i < array.length ; i++) {
  console.log(array[i])
}

let classmates = ['Kim', 'Juan', 'Korto', 'Briana', 'Karla'];

// for (let i = 0; i < classmates.length; i++){
//   console.log('Great to see you ' + classmates[i] + '!')
// } 

// classmates()


  classmates.slice(2, -1)
  console.log(classmates)

  var count = 0;
  while(count<students.length){
    console.log('great to see you' + students[count] + '!');
    count++;
  }


  function declareHello(myName, funStuff){
    console.log('Hello, '+ myName + '! ' + funStuff + ', ' + 'I am a function declaration' + '.');
    console.log('----------------------------------------');
    //Return stops the execution of a function
    return;
  }
//Function must be called to execute
  declareHello('Kimberly', 'Enjoy')

  //function expression

  let expressHello = function(myName){
    console.log('Hello,' + myName + ','+ ' I am function expression');
    console.log("------------------------------");
    return;
  };

  expressHello(' Kim');
  expressHello(' Porto');
  expressHello(' Juan');

function declarationHelloAgain(x,y,z ) {
  console.log("Hello, my parameter's value are " + x + ", "+ y + " ,and " + z);
  return;
}

declarationHelloAgain(7, "Hello", true);


// using function declaration
function isEqual(x, y) {
if (x === y){
console.log('They are equal in value and type');
} else if(x == y) {
console.log('They are equal in value but not type');
} else {
console.log('They are not equal');
}
return;
}

isEqual(10,10); 

isEqual('10', 10);


// Using function expression
let isEqualTakeTwo = function(x,y){
 if (x === y) {
   console.log('They are equal in value and type')
 } else if (x == y) {
  console.log('they are equal in value but not type')
 } else {
   console.log('they are not equal')
 }
 return;
}

isEqualTakeTwo(10,10);
isEqualTakeTwo('10',10);
isEqualTakeTwo(9 , 10);
