//functions

//Eine Basis-Funktion definieren
function firstFunction() {
  console.log("Erste Funktion");
}
  
//Funktion mit Default-Parametern
function defaultParamterFunction(test = "Peter") {
  console.log(`My name is ${test}`);
}

//Bei Aufruf der Funktion wird Default-Wert nur dann getriggert, wenn kein Argument beim Funktions-Aufruf/Invoke angegeben wird. Beispiele

defaultParamterFunction("Retep"); //Variable defaultValue bekommt den Wert "Retep", da Argument im Funktionsaufruf übergeben wurde

defaultParamterFunction(); //Default Value wird verwendet, da kein Argument im Funktionsaufruf angegeben wurde

//Anonyme Funktionen
//Werden verwendet, wenn man keinen Namen angeben möchte
//Anwendungsfall: Wenn man eine Funktion als Argument beim Aufruf einer anderen Funktion übergeben möchte --> Sogenannte Callback-Functions oder einfach nur Callbacks


(function (){
  console.log("Erste anonyme Funktion.");
});

let test = (function (){ //Mit Zuweisung
  console.log("Erste anonyme Funktion.");
});

//Scope Übungen

//Übung 1: Function Scope

function scopeFunction() {
  let functionVariable = 123;
}

// alert(functionVariable); //Geht nicht, da functionVariable nur innerhalb von scopeFunction ihre Gültigkeit hat/aufgerufen werden kann;

function scopeFunction2 () {
  alert(functionVariable); //Error, da nicht auf Function Scope Variable functionVariable zugegriffen werden kann (anderer Scope)
}


//Übung 2: Global Scope

let myName = "Peter Herzenberger"; //Globale Variable mit Global Scope

function returnMyName() {
  alert(myName); //Innerhalb des Function Scopes KANN auf globale Variable myName zugegriffen werden
}

//Übung 3: Block Scope (Conditionals)

if (1 >= -1) {
  let blockVariable = true;
  console.log(blockVariable);
}

// console.log(blockVariable); //ReferenceError, da Variable in nur in Block-Scope deklariert wurde;

//Übung 4: Block Scope (Loops)

while (true) {
  let loopVariable = "hello"; //kann nur innerhalb dieses Scopes aufgerufen werden
  console.log(loopVariable);
  break;
}

// console.log(loopVariable); //ReferenceError, da Variable in nur in Block-Scope deklariert wurde;


function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal());


//Scope Zusatz: Same Name

let myFirstName = "Peter";


function myFunction() {
  let myFirstName = "Wolfgang"; //Lokale Variable überschattet globale Variable; Output: Wolfgang
  console.log(myFirstName);
}

myFunction();


//3 Types of Functions that return "undefined"
//1. Function without any body
function fWithoutBody() {

}
fWithoutBody(); //undefined

//2. Function with body but no return
function fWithoutReturn() {
  let randomText = "test";
}

fWithoutReturn(); //undefined

//3. Function with empty return value
function fWithoutReturnValue() {
  return;
}

fWithoutReturnValue(); //undefined

//Function returning the least of two numbers
function checkLowestNumber(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

//Function calculating the given power on a given number
function pow(number, power) {
  if (number > 0) {
    return number**power;
  }
}

// let number = prompt("Number? ");
// let power = prompt("Power? ");

// console.log(pow(number, power));

//Funktions Deklaration (Function Declaration) vs. Funktions Ausdruck (Function Expression)

//Function Declaration
function normalFunction() {
  //do something
}

//Function Expression
let functionExpression = function() {
  //do something
}


//Swapping Functions

function baseFunction() {
  console.log("Hello there");
  return;
}

let swapMe = baseFunction; //Da Funktionen am Ende des Tages nichts anderes als Werte sind
// console.log(swapMe);
swapMe();

//Test des Gelernten
/*
1. Arrow-Functions mit einer Expression
2. Arrow-Functions mit mehreren Expressions
3. Function-Declaration Aufruf (zuerst Aufruf, dann Deklaration)
4. Function-Expression Aufruf (zuerst Aufruf, dann Deklaration)
5. Arrow-Function Aufruf (zuerst Aufruf, dann Deklaration)
*/

//1. Arrow-Functions mit einer Expression
let firstArrow = (a=2, b=3) => console.log("Arrow Function Result: " + (a + b));
firstArrow();

//2. Arrow-Functions mit mehreren Expressions
let secondArrow = (a, b) => {
  console.log("Das Ergebnis lautet: ")
  c = a*b;
  // return c;
  // console.log(c);
  return c;
}

secondArrow(1,3);

//3. Function-Declaration Aufruf (zuerst Aufruf, dann Deklaration)

callMeBaby();

function callMeBaby() {
  console.log("Call me baby");
}

//4. Function-Expression Aufruf (zuerst Aufruf, dann Deklaration)

// testExpression(); //Wirft einen Fehler, da Aufruf der Function-Expression vor deren Definition

let testExpression = function() {
  console.log("Call me baby expression");
}

//5. Arrow-Function Aufruf (zuerst Aufruf, dann Deklaration)
// arrowCall(); //Uncaught ReferenceError: Cannot access 'arrowCall' before initialization

let arrowCall = () => console.log("works");

arrowCall();

//Rewrite Function-Expression with Arrow Functions example https://javascript.info/arrow-functions-basics#rewrite-with-arrow-functions

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.") 
// );

// (function() { alert("Servus")});

//Assignment from Fundamentals Part 3 https://www.theodinproject.com/lessons/foundations-fundamentals-part-3#assignment

function add7(number) {
  return (number + 7);
}

function multiply(number1, number2) {
  return (number1 * number2);
}

function capitalize(randomWord) {
  const newString = randomWord[0].toUpperCase() + randomWord.slice(1).toLowerCase();
  return newString;
}

function lastLetter(randomString) {
  return randomString.slice(-1); //Nachdem kein Ende definiert wurde, startet UND endet er gleichzeitig beim letzten Buchstaben
}

/**************************************************************/
/****************************16.06*****************************/
/**************************************************************/


//Zum Thema Reference Errors

// console.log(testerich); //Reference Error, da Aufruf vor Variablen-Definition

let testerich = "testerich";


// testArrow(); //Reference Error, da Aufruf vor Funktions-Definition

testArrow = () => console.log("testarrow");

//Zum Thema Syntax Errors

// console.log "Hallo"; //Syntax Error, da runde Klammern fehlen

const testConstant = "Hallo";
// console.log(testConstant.push()); //TypeError, da Methode auf falschen Datentypen (String) angewendet wurde, die man nur für Arrays verwenden kann
console.log(testConstant);


