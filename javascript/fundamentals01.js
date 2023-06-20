"use strict"; //Am Anfang hinzugefügt, müssen zB Variablen mit let, var oder const deklariert werden
//Ohne diesen "Modus" könnte man Variablen auch ohne let etc. deklarieren;

let user = "Peter";
let age = 28;
let message = "Soon I will be a really good Chrome Dev";
const fullName = "Peter Herzenberger"; //Konstanten werden verwendet wenn man sich sicher ist, dass sich Variablen-Wert nie ändern wird.
//Konstanten die von vornherein klar sind und nicht im Zuge einer Logik berechnet werden, sollten groß geschrieben werden; Beispiel: const BIRTHDAY = "10.04.1995";
//Beispiel für kleingeschriebene Konstante: const pagespeed = "..." //Wird erst im Zuge des Programms errechnet und ist initial noch nicht bekannt;
// fullName = "Wolfgang"; UNGÜLTIG, Konstanten können keine neuen Werte annehmen

console.log(fullName);

let newMessage;
newMessage = message;
// let newMessage = "test"; Kann keine Variable zwei Mal deklarieren.

//Variablen-Deklarationsregeln:
//Alle Zahlen, Zeichen sowie $ und _; darf nicht mit einer Zahl beginnen!
//CamelCase wenn Variablenname mehrere Worte hat: Beispiel: kleinsterGemeinsamerNenner
let test123$ = 123; 
let $123test = 123;
let _123test = 123;
let _$_ = 123;

// alert(_$_);

console.log(user + ", " + age + " says: " + newMessage);

//Task #1
let admin;
let name = "John";
admin = name;

// alert(admin); //Output: John

//Task #2
const ourPlanetName = "Earth";
let currentVisitor = "";

let num1 = "12" ;
let num2 = "12";
let sum = num1 - num2; //Funktioniert, wenn zwei Zahlen-Strings miteinander multipliziert, dividiert, Modulo und subtrahiert werden

console.log(" " + isNaN("e"));

console.log(num1 + num2);
console.log(admin + fullName);
console.log(num2 + fullName);

let num = 2;

while(num != Infinity) {
    num **= 2;
    console.log(num);
}

console.log(num1 == num2);
console.log(num1 === num2);
num1 = 12;
console.log(num1 == num2);
console.log(num1 === num2);