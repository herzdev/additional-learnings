/**************************************************************/
/****************************19.06*****************************/
/**************************************************************/


//Testing const variable manipulations
//they can't be reassigned but they can be manipulated
const testArray = [1, 2, 3];
const firstName = "Peter";  

testArray.push(4);

console.log(testArray);
console.log(firstName.concat(" Herzenberger"));

//Arrays

//Different ways to initialize an array
//in a row
const names = ["Peter", "Jörgen", "Jürgen"];

//in two rows
const names2 = [
    "Peter",
    "Jörgen",
    "Jürgen",
]

console.log(names); 
console.log(names2); //same output as console.log(names)

//Assignment via Array Index after Declaration
const names3 = [];
names3[0] = "Peter";
names3[1] = "Jörgen";
names3[2] = "Jürgen";

console.log(names3); //same output as console.log(names)


//Array Indexing
let firstNameInArray = names[0]; //Gets first Element in the Array called names > "Peter"
console.log(firstNameInArray);
console.log(names[1]); //logs second element in the array called names > "Jörgen"

//Changing the value of a specific element at a specific index
names[1] = "Steven"; //sets array element at index (1) ("Jörgen") to Steven
console.log(names[1]);
console.log(names);

//Converting Array to String
let convertArrayToString = names.toString(); //converts an array to a string > "Peter,Steven,Jürgen";
console.log(convertArrayToString);
console.log(convertArrayToString[0]); //returns the first letter > "P"

//JS Arrays are objects > they have the datatype of an object (non-primitive)
console.log(typeof names);

//Arrays can take any kind of datatype as their values
const arrayWithDifferentDatatypes = [
    1,                              //Datatype: Number
    "P",                            //Datatype: String
    () => console.log("hello"),     //Datatype: Function
    names.length                    //Datatype: Number
];

console.log(typeof arrayWithDifferentDatatypes[0]);    //1
console.log(typeof arrayWithDifferentDatatypes[1]);    //"P"
console.log(typeof arrayWithDifferentDatatypes[2]());  //"hello"
console.log(typeof arrayWithDifferentDatatypes[3]);    //3

//Accessing elements in an array
console.log(names[0]); //First element > Peter
console.log(names[names.length - 1]) //Last element > Jürgen

//Adding elements to an array
//Option 1: push()
names.push("new entry"); //push() adds a new element at the end of the array
console.log(names);

//Option 2: [index] = "new element"
names[4] = "new element";
console.log(names);

//Be careful with option #2, as you can get empty holes within the array, e.g.
names[6] = "new element";
console.log(names); /*[
    "Peter",
    "Steven",
    "Jürgen",
    "new entry",
    "new element",
    null,
    "new element"
]*/

const testObj = {name: "Peter", gehaltAktuell : 700};
console.log(testObj.name + testObj.gehaltAktuell);

console.log(Array.isArray(names));      //true: da Array
console.log(Array.isArray(testObj));    //false: da Object

//JS Array built-in properties and methods

// console.log(names.sort()); //sorts the array ascending
const manipulateMe = ["First", "Second", "Third"];

console.log(manipulateMe.length); //returns the amount of elements within an array
console.log(manipulateMe.toString()); //Output: "First,Second,Third"
console.log(manipulateMe.join(" | ")); //same as .toString() but with a customized separator; Output: First | Second | Third

console.log(manipulateMe);

//Pushing and Popping > Adding and Removing new Elements in an Array
console.log(manipulateMe.push("Fourth")); //Adding fourth item to array and returning the new length
console.log(manipulateMe);
console.log(manipulateMe.pop()); //Removing last item from array ("Fourth") and returning the removed item name
console.log(manipulateMe);
console.log(manipulateMe.shift()); //Same as .pop() but it removes the first element now and returns its value
console.log(manipulateMe);
console.log(manipulateMe.unshift("add new element")); //adds element at index 0 and returns new array length
console.log(manipulateMe);

const flatArray = [[1,2],[3,4]];
console.log(flatArray);
const newArray = flatArray.flat(); //combines array within an array into one array only
console.log(newArray); //Output: [1,2,3,4]

//.splice() to add elements in an array
newArray.splice((newArray.length),0, 4, 5); //first arg (array.length): index where insertion starts; second arg (0): how many elements after arg1 index needs to be removed folled by the new elements that I want to have in the array
console.log(newArray);

//.splice() to remove elements in an array
const spliceRemoveArray = ["First", "Second", "Third"];
spliceRemoveArray.splice(0,1); //Begin at index 0 (arg1) and remove 1 (arg2) items ("First")
console.log(spliceRemoveArray);

//.slice() to create a new array without the sliced element
const slicedArray = [1,2,3,4];
const slicedArrayElement = slicedArray.slice(2); //arg: Removes all elements before Index 2 (1,2) and creates a new array with the remaining ones (3,4)
console.log(slicedArrayElement);

//.slice() with 2 arguments (begin + end, but not including)
const sliceTwo = [1,2,3,4,5];
const newSliceTwo = sliceTwo.slice(0,2); //starts at index 0 and ends at index 1 > (1,2) will get sliced
console.log(newSliceTwo); //returns the sliced items (1,2) as a new array


//Loops in JavaScript
const loopArray = [1,2,3,4];

for(const item of loopArray) { //const item gets the first, then the second, then ... item, until it reaches the end of the array and prints the item after each run > 1. run: item = 1 + log it; 2. run: item = 2 + log it, 3. run, .....
    console.log(item);
    // break; //Bricht nach dem ersten Schleifen-Durchlauf ab
    continue; //
}

//Übungsbeispiele

//a) Schreibe eine for-Schleife, die die Zahlen von 1 bis 10 ausgibt.
for(let i = 1; i < 11; i++) {
    console.log(i);
}

//b) Verwende eine for-Schleife, um die Summe der Zahlen von 1 bis 100 zu berechnen.
let summe = 0;
//Pseudocode:
/*
Erstelle eine Hilfsvariable (summe), welche mir die Summe berechnet und setze deren Anfangswert auf 0
Erstelle eine for-loop, welche von 1 bis 100 durchläuft (let i = 1; i < 101; i++)
Nach jedem Schleifendurchlauf muss die Summe um den jeweiligen Wert der aktuellen Zahl erhöht werden: summe += zähler (i) > 0 = 0 + 1; 1 = 1 + 2; 3 = 3 + 3, ...
Gib den Wert (summe) nach der for-loop mittels console.log aus
*/
for (let i = 1; i < 101; i++) {
    summe += i;
}

console.log(summe);


//c) Iteriere über ein Array von Namen und gib jeden Namen in der Konsole aus.
const nameArray = ["First Name", "Second Name", "Third Name"];

for(const name of nameArray) {
    console.log(name);
}

//d) Schreibe eine for-Schleife, die die geraden Zahlen von 1 bis 20 ausgibt.
//PseudoCode
/*
Erstelle eine for-loop die von 1-20 durchgeht for (let i = 1; i <= 20; i++)
Überprüfe nach jedem Durchlauf ob es sich bei dieser Zahl um eine gerade Zahl handelt:
    WENN ZAHL % 2 == 0 --> Ist dasselbe wie gerade, Beispiel: 4%2 == 0, da 4:2 = 2 und 0 Rest; 4%3 = 1 da 4:3 = 1 und 1 Rest;
Gib im Falle einer geraden Zahl diese Zahl aus
*/

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else { continue; }
}

//e) Verwende eine for-Schleife, um die Faktorielle einer gegebenen Zahl zu berechnen.
/*
Faktorielle von 5 = 5 + 4 + 3 + 2 + 1 = 15
Fordere User auf eine natürliche, ganze Zahl einzugeben
Konvertiere die Zahl zu einer Number: Number()
Erstelle eine Hilfs-Variable, jede Nummer addiert: let faktorielle = 0;
Erstelle eine for-loop, welche beginnend mit der User Zahl bis 1 zählt
    Beispiel: User-Zahl = 5; for (let i = 5; i >= 1; i--)
    Addiere die Hilfs-Variable faktorielle um den aktuellen Zähler
        faktorielle += i;
        1. Durchlauf: 0 = 0 + 5;
        2. Durchlauf: 5 = 5 + 4;
        3. Durchlauf: 9 = 9 + 3;
        4. Durchlauf: 12 = 12 + 2;
        5. Durchlauf: 14 = 14 + 1;
Console.log() das Endergebnis / die Faktorielle
*/

// const userNumber = Number(prompt("Gib bitte eine ganze Zahl ein: "));
let faktorielle = 0;

for (let i = 1; i >= 1; i--) {
    faktorielle *= i;
}
console.log(faktorielle);

//Thema while-loops
// a) Schreibe eine while-Schleife, die die Zahlen von 1 bis 5 ausgibt.
/*
Erstelle eine Check-Variable, die den Wert 1 enthält; let number = 1;
Die while loop soll so lange durchlaufen, bis die Zahl 5 erreicht wurde
Überprüfe ob die number bereits 5 hoch ist, wenn nicht
    console.log(number)
    number++;
*/
let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}

// b) Implementiere eine while-Schleife, um die Summe der Zahlen von 1 bis 50 zu berechnen.
/*
Erstelle Hilfsvariable summe und setze wert auf 0
Erstelle eine loop-Variable und setze ihren Wert auf 1 > let number = 1
Erstelle while-loop und loope von 1 weg solange, bis 50 erreicht wurde while(number <= 50)
Rechne die jeweilige Zahl zur jeweiligen Summe von summe mittels summe += number
Erhöhe die number um ein > number++;
Gib das Ergebnis nach der while-loop mittels console.log aus
*/
let summe2 = 0;
let number2 = 1;

while(number2 <= 50) {
    summe2 += number2;
    number2++;
}

console.log(summe2);



// c) Schreibe eine while-Schleife, die eine Eingabeaufforderung wiederholt, bis eine bestimmte Bedingung erfüllt ist.
let userInput = "";

// while(true) {
//     userInput = prompt("Name: ");
//     if (userInput == "Peter") { break; }
// }


// d) Verwende eine while-Schleife, um die Faktorielle einer gegebenen Zahl zu berechnen.
let basisZahl = 4;
let helpFaktorielle = 1;

while (basisZahl >= 1) {
    helpFaktorielle *= basisZahl; //1 = 1 * 4 > 4; 4 = 4 * 3 > 12; 12 = 12 * 2 = 24; 24 = 24 * 1 = 24;
    basisZahl--;
}

console.log(helpFaktorielle);

// e) Implementiere eine while-Schleife, um die Zahlen von 100 bis 1 rückwärts auszugeben.
let startCounter = 100;

while (startCounter >= 1) {
    console.log(startCounter);
    startCounter--;
}

//Beispiele zum Thema do-while

// a) Schreibe eine do...while-Schleife, die die Zahlen von 1 bis 5 ausgibt.
let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);

// b) Implementiere eine do...while-Schleife, um die Summe der Zahlen von 1 bis 10 zu berechnen.
let doWhileSum = 0;
let i2 = 1;

do {
    doWhileSum += i2; // 0 = 0 +1; 1 = 1 + 2; ...
    i2++;
} while(i2 <= 10);
console.log(doWhileSum);


// c) Schreibe eine do...while-Schleife, die eine Eingabeaufforderung wiederholt, bis der Benutzer "exit" eingibt.
// userInput = "";
// do {
//     userInput = prompt().toLowerCase();
// } while(userInput !== "exit");


// d) Verwende eine do...while-Schleife, um eine Tabelle der Faktoriellen von 1 bis zu einer gegebenen Zahl zu generieren.
/*
PSEUDOCODE
Ziel: User gibt Zahl ein; Danach wird für jede Zahl, beginnend bei 1, bis zur Userzahl, die aktuelle Faktorielle berechnet; bedeutet:
    für 1: 1 * 1 = 1
    für 2: 2 * 1 = 2
    für 3: 3 * 2 * 1 = 6
    für 4: 4 * 3 * 2 * 1 = 24
    usw.
Lösungsansatz:
1. Ich brauche eine Funktions die mir die Faktorielle berechnet, egal welche Nummer
2. Ich muss nach jeder Berechnung eine Zahl weiter und diese Zahl der Funktion übergeben
3. Wiederhole 2., bis ich am Ende des User Inputs gelangt bin
*/

function calculateFactorial(number=1) {
    let sum = 1;
    while(number >= 1) {
        sum *= number; //Bei 3: 1 = 1 * 3; 3 = 3 * 2 = 6; 6 = 6 * 1;
        number--;
    }
    return sum;
}

let counter = 1;
let res = 0;
// userNumber = Number(prompt("", 1));

// do {
//     res = calculateFactorial(counter);
//     console.log(`Factorial of ${counter} = ${res}`);
//     counter++;
// } while(counter <= userNumber);


// e) Implementiere eine do...while-Schleife, um eine Eingabeaufforderung zu wiederholen, bis der Benutzer eine Zahl größer als 100 eingibt.

do {
    userNumber = Number(prompt("Zahl: "));
} while(userNumber <= 100);
