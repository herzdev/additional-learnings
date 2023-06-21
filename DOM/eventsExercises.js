// Method #2, via DOM-Selector
const btn = document.querySelector("#button");

// btn.onclick = () => alert("Hello, there!");

// Method #3, via EventListener
// btn.addEventListener("click", () => {
//     alert("Hello, there!");
// });

// Method #3 Alternative to Arrow-Function Argument

// btn.addEventListener("click", alertMessage);

// function alertMessage() {
//     alert("Hello, there!");
// }

// With Call-Back function (e), where paramater e is an object and references to the event istelf
btn.addEventListener('click', function (e) {
    console.log(e.type); //the object brings useful properties like target, which returns the DOM element targeted, or type, that returns the event itself ("click").
    let object = e.target; //targets the DOM-node
    object.style.color = "blue"; //Changes the DOM-node to color blue
});

// Off-Topic, but didn't learn/practice it in the loop-exercises
// Looping through an Array with forEach exercises:

// 1. Create an Array and loop through it via forEach

const myArray = [1,2,3,4];

function calculateSum(numbers) {
    
    let sum = 0;

    numbers.forEach(function(element) {
        sum += element;
    });

    return sum;
}

console.log(calculateSum(myArray));

// const array = [1, 2, 3, 4, 5];

// array.forEach(function(element, index) {
//     array[index] = element * 2;
// });

// console.log(array); // Ausgabe: [2, 4, 6, 8, 10]

// Beispiel: Implementiere eine Funktion, die ein Array von Wörtern nimmt und die Anzahl der Zeichen für jedes Wort ausgibt.

/*
FUNKTION:
erstelle funktion, die
    loope durch das übergebene array
    nach jeder iteration, eruiere die länge des aktuellen elements
    logge die länge
*/

const wordArray = ["First", "Second", "Third"];

getWordLengthPerElement(wordArray);

function getWordLengthPerElement(words) {
    
    words.forEach((element, index, array) => {
        console.log(element.length);
    });
}

// 3. Erstelle eine Funktion, die ein Array von Zahlen erhält und prüft, ob alle Zahlen größer als 0 sind, indem du .forEach verwendest.
function checkNumbers(numbers) {
    numbers.forEach(function(element, index) {
        if(element > 0) {
            console.log(`${element} @Index [${index}] ist greater than 0 = ${(element > 0)}`);
        }
    });
}


// classic function
function doSmth() {
    alert("hello");
}

// function expression
let doSmth2 = (function() {
    alert("hello");
})

// arrow function
let doSmth3 = () => alert("hello");

// doSmth();
// doSmth2();
// doSmth3();


function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]); // This is when the callback function gets called, or executed
    }
  }
  

//Aufgabe: EventListener auf mehrere DOM-Elemente setzen
const allBtns = document.querySelectorAll("button");
// console.log(allBtns);

//für jedes Element in der NodeListe, füge einen click-EventListener hinzu, der
allBtns.forEach(function(element) {
    element.addEventListener("click", () => {
        alert("Hello, there!");
    });
});
