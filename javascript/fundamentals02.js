//Integer Deklaration
// let number1 = 123;

//Float Deklaration
// let number2 = 123.123;

//String Deklaration
let myName = "Peter";
let name2 = 'Peter';
// let name3 = `Peter ${number1 + number2}`;
// console.log(name3);

//Symbols Beispiel

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1);
console.log(symbol2);

console.log(symbol1 === symbol2); // Output: false (Symbole sind eindeutig)

const obj1 = {
  [symbol1]: "Value 1"
};

const obj2 = {
  [symbol1]: "Value 2"
};

console.log(obj1[symbol1]); // Output: Value 1
console.log(obj2[symbol1]); // Output: Value 2

//Bisher definierte Typen

typeof "test";
typeof "";
typeof 123;
typeof 123.123;
typeof 123n;
typeof undefined;
typeof symbol2;
typeof null; 
typeof alert;

let testVariable = `Hello \`there123`; //Escape Zeichen \ gefolgt vom jeweiligen Escape-Symbol `
console.log(testVariable);

let testVariable2 = "Das ist ein Test\wort";
console.log(testVariable2)

let num1 = 123;
let num2 = "123";

console.log(typeof num1);
console.log(num1);
console.log(typeof num2);
console.log(num2);

num1 = num1.toString();
num2 = Number(num2);

console.log(typeof num1);
console.log(num1);
console.log(typeof num2);
console.log(num2);

let nummer1 = "12";
let nummer2 = 2;

console.log(`${nummer1}`);

let someString = `Das
ist ein Multi
Line
String`;

console.log(someString);

let someString2 = 'Das ist ein Test';

console.log(someString2);

//String Manipulations

//String length porperty
console.log(someString2.length);

//String Slicing --> auf Deutsch: String aufschneiden

let testString = "Peter Herzenberger wird ein hervorragender Software-Unternehmer!";

console.log(testString.slice(-12,)); //slice(): Anfang, Ende; -Werte starten von hinten
console.log(testString.substring(-22,-22)); //substring(): wie slice(), nur -Werte werden automatisch zu 0er Werten; Egal ob Anfang oder Ende
console.log(testString.substr(0,5)); //substr(): Wie slice(), nur dass zweiter Wert Länge des herausgeschnittenen Textes angibt

let str = "Apple, Banana, Kiwi";
let part = str.slice(-5);

console.log(part);

//replace()-Methode
console.log(testString.replace(" ", " Wolfgang ")); //tauscht nur bei erstem Vorkommnis aus, nicht aber bei einem zweiten; 
//Der String selbst wird NICHT geändert, sondern lediglich temporär der veränderte String ausgegeben
//replace() ist case-sensitive; Software und SOFTWARE sind zwei verschiedene Dinge
console.log(testString.replace(/SOFTWARE/i, "B2B-SaaS")); //Beispiel für eine RegularExpression, in der nicht-case-sensitive gesucht wird: SOFTWARE = software = Software
console.log(testString.replace(/ /g, " WOLFGANG ")); //Verwendung von RegExp /g für die Änderung JEDES Vorkommnisses; g = global match
console.log(testString);

console.log(testString.toUpperCase()); //Erzeugt aus einem normalen String einen Upper-Case-String: alles groß
console.log(testString.toLowerCase()); //Erzeugt aus einem normalen String einen Lower-Case-String: alles klein

//Concatenation: Verkettung von zwei Strings
//Funktioniert nur auf Strings; Mit Numbers wurde getestet und funktioniert nicht
let con1 = "Peter";
let con2 = "Herzenberger";

console.log("Concat Beispiel: " + con1.concat(" ", con2));

//Trim-Methoden: Entfernt Leerzeichen eines Strings: Nur vorne und hinten, nicht aber mittig

let trimString = "     Peter Herzenberger      ";
console.log(trimString.trim()); //Leerzeichen am Anfang und Ende werden entfernt
console.log(trimString.trimStart()); //Nur Leerzeichen am Anfang werden entfernt
console.log(trimString.trimEnd()); //Nur Leerzeichen am Ende werden entfernt

//Pad-Methoden: Polster/Füllt einen String vom Anfang bzw. vom Ende an bis zu einer gewissen Länge mit entsprechenden Zeichen auf

let padString = "ter"

//Wenn der zu ausfüllende String größer ist als Argument 1, so wird nichts gefüllt, weder vorne noch hinten.
console.log(padString.padStart(5, "P")); //Fülle String solange von Anfang an mit Argument 2, bis Länge von Argument 1 erreicht wurde
console.log(padString.padEnd(5, "r")); //Fülle String solange von Anfang an mit Argument 2, bis Länge von Argument 1 erreicht wurde

//charAt()-Methode, charCodeAt() und Property Access
console.log(padString.charAt(2)); //Gibt Buchstabe an Position des Index aus, angegeben durch Argument
console.log(padString.charCodeAt(2)); //Gibt Unicode an Position des Index aus, angegeben durch Argument
console.log(padString[0]); //Gibt Buchstabe an Position des Index aus

//split(): Splitted String in ein Array
let arrayString = "a,b,c,d,e,f,g,h";

console.log(arrayString.split("")); //Das Argument gibt den Punkt an, an dem gesplitted wird

//Bei ("") bekommt jeder Buchstabe im String einen eigenen Platz im Array
//Bei keiner Angabe eines Arguments () wird der ganze String an die Position 0 gesetzt und das Array hat auch nur ein Element (auf Position 0 = der gesamte String)

//Comparison Exercises
let a = 1;
let b = 2;

console.log(a > b);
console.log(b > a);
console.log(a == b);
console.log(a === b);
console.log(typeof a == typeof b);
console.log(typeof a === typeof b);

let tesCompare = Number(`${123}`);
console.log(tesCompare + typeof tesCompare);

let stringCompare1 = true;
let stringCompare2 = 1;

//Kleinbuchstaben sind in JS aufgrund der Indexierung GRÖßER als Großbuchstaben!
//Nummern sind immer keliner als Buchstaben; Auch wenn der Vergleich von Buchstaben und Nummern wenig Sinn macht imho

console.log(stringCompare1 > stringCompare2); 
console.log(stringCompare1 < stringCompare2); 
console.log(stringCompare1 == stringCompare2); 
console.log(false != true); //0 != 1 = true
console.log(false < true);  //0 < 1 = true
console.log(false > true);  //1 > 0 = false

//Gleichheitsoperator == und ===
//Der Gleichheitsoperator == hat das Problem, dass hier nur die Werte miteinander verglichen werden; Sobald keine Zahl vorhanden ist, wir beim Vergleich die zu vergleichenden Seiten immer in Nummern konvertiert. Beispiel:

console.log("GLEICHTHEITSOPERATOREN");
console.log("");
console.log("");

let firstNumber = true;
let secondNumber = false;

console.log(firstNumber == false); //Ergibt true, da firstNumber leer ist und ein leerer String automatisch zu einer 0 in JavaScript wird; Somit lautet End-Vergleich: 0 == 0 = true

console.log(firstNumber === false); //Hier wird auch der Typ verglichen. In dem Fall wird ein Nummern-Datentyp mit einem Boolean Datentyp verglichen; das Resultat ist somit false

console.log(true != false);
console.log(typeof true != typeof false);

console.log(true !== false); //ergibt true, da Wert-Vergleich folgender ist: 1 ungleich 0 == true und Typvergleich folgender ist: Boolean ungleich Boolean

// console.log(2 <== 3); //Der Typen-Vergleich funktioniert lediglich mit Gleichheitsoperatoren (=== oder !==), nicht aber mit Vergleichsoperatoren (<, >, <=, >=)

/**************************************************************/
/**************************** 04.06****************************/
/**************************************************************/

//Conditionals if, else if, else, switch
let myname = "21";

if(myname.length == 0) {
  console.log(`Variable ist leer`);
}
else if(myname.length == 1) {
  console.log(`Variable hat nur ein Zeichen`);
}
else {
  console.log("Variable hat mehr als ein Zeichen");
}

let age = 91;

if(age >= 14 && age <= 90) {
  console.log("Notwendiges Alter erreicht!");
}

//Variante zwei mit ! und ohne !
if(!(age >= 14 && age <= 90)) { //!false > true
  console.log("Notwendiges Alter nicht erreicht! Variante 1");
}

//Variante ohne !
if(age < 14 || age > 90) {
  console.log("Notwendiges Alter nicht erreicht! Variante 2");
}

//Logische Operatoren: ||, &&, ! (Reihenfolge nach Wichtigkeit/Prio: ! > && > ||)


//Beispiel für &&
console.log(1 && 2 && null); //null, undefined, 0, "", NaN, false sind alles falsy Values
//&& gibt den ersten falsy Value zurück: null

//Beispiel für ||
console.log(0 || 0 || 1);
//|| gibt den ersten truthy Value zurück: 1

//Generell hat && Vorrang gegenüber ||; Kann man so verstehen, als wären Operanden vor dem && in Klammern gesetzt; Beispiel:
console.log(0 && 1 || 0 || "hallo"); // 0 && 1 = 0; 0 || 0 || "hallo" => "hallo", da dies der erste richtige Wert ist

//! bzw. NOT und !!-Operator
//! kehrt den booleschen Wert einer Variable um
//!! kehrt ihn erneut um, sodass im Endeffekt der Ausgangs-boolesche Wert entsteht; Anders formuliert, ermittelt den booleschen Wert einer Variable

//Beispiel !
console.log("! Operator:");
console.log(!true); //false
console.log(!false); //true
console.log(!undefined); //true
console.log(!""); //true 

// Beispiel !!
console.log("!! Operator:");
console.log(!!true); // true > false > true
console.log(!!false) // false > true > false
console.log(!!undefined); //false
console.log(!!""); //false

//Alternative zu !! > Boolean()
console.log(Boolean(undefined)); //false

// alert(alert(1)); //Ergibt undefined als retournierten Wert, da die alert()-Funktion standardmäßig keinen Return-Value besitzt; darum undefined

//Login example from https://javascript.info/logical-operators
let whoWantsToLogin = ""; //prompt("Who's there?");
// console.log(typeof whoWantsToLogin);

//Return Values von prompt:
//bei Escape-Taste mit/ohne Werte = object
//bei keinem Input aber Enter = String
//bei Input und Enter = String

const loginName = "Admin";
const password = "TheMaster";

if(whoWantsToLogin === loginName) { //Wenn Login-Name "Admin"
  const userPassword = prompt("Password: ");
  if(userPassword === password) {
    alert("Welcome!");
  }
  else if(typeof(userPassword) == "object") {
    alert("Es wurde Escape gedrückt. Good Bye!");
  }
  else {
    alert("Wrong password");
  }
}
else if(typeof(whoWantsToLogin) == "object") {
  alert("Es wurde Escape gedrückt. Good Bye!");
}
else {
  // alert("I don't know you");
}

//switch Case Beispiel
//Wichtige Anmerkungen: switch-cases vergleichen den case STRIKT, also Value + Datentyp müssen übereinstimmen
//Wenn ich ein break vergesse, so werden ALLE NACHFOLGENDEN cases, inkl. dem default-Case ausgeführt, ohne dass die Bedingung erneut überprüft wird! Gefährlich.
//switch-Bedingungen sind case-sensitive
const userName = "test" //prompt("Username");

switch(userName) {
  case "Megan":
    console.log("Hi, Peter");
    break;
  case "WOLFGANG":
    console.log("Hi, Wolfgang");
    break;
  default:
    console.log("Du bist weder Peter, noch Wolfgang. Bye");
}

//ReWriting Switch into if..else https://javascript.info/switch#rewrite-the-switch-into-an-if
const browser = ""; //prompt("Which browser are u using?");

if(browser == "Edge") {
  console.log("You've got the Edge!");
} else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
  console.log(`Okay, we support the browser ${browser} too`);
} else {
  console.log("We hope that this page looks ok!");
}

//ReWriting if..else Into Switch https://javascript.info/switch#rewrite-if-into-switch
// let ab = +prompt("a?", ""); //zweites Argument gibt default-Wert an; Das + vor Prompt ist der Unary-Operator und versucht Wert in Number zu konvertieren. Selbiges Ergebnis wie bei Number()
// console.log(typeof ab); //Number, da von String zu Number mittels unary-Operator (+) konvertiert wurde
// switch(ab) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log( '2,3' );
//     break;
//   default:
//     console.log("Ungueltiger Wert!");
//     break;
// }

//if ohne Block/geschweiften Klammern --> Wird nicht empfohlen
if (1 > 1) console.log("Hello there"); //Kann maximal einen Befehl ausführen, kein multi-line

//Question-Mark operator "?"
//Weist einer Variable einen booleschen Wert zu, auf Basis einer Bedingung, die zuvor überprüft wird; Ist kürzer als ein if-statement + separate Variablen-Deklaration; Sollte jedoch nur verwendet werden, wenn man genau nur zwei mögliche Werte benötigt; Ansonsten if; Beispiel:

let firstName = (3 > 1) ? "Peter" : "Wolfgang"; //wenn Bedingung (1 > 1) truthy ist, dann erster Wert nach "?", ansonsten zweiter Wert
console.log(firstName);

//Question-Mark operator mit zwei "??"
// let randomMessage = prompt("Your message: ");

// let isHello = (randomMessage == "hello") ? "hello" : (randomMessage == "HELLO") ? "HELLO" : "irgendwas";
// console.log(isHello);

//Example if else aus https://javascript.info/ifelse#the-name-of-javascript
let userAnswer = "test"; //prompt("What is the official name of JavaScript");
let answerCorrect = (userAnswer.toLowerCase() == "ECMAScript".toLowerCase()) ? "Right" : "You don't know ECMAScript?!";
console.log(answerCorrect);

// let userNumber = Number(prompt("Number? "));
// if(userNumber > 1) {
//   alert(1);
// } else if (userNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

let result = (a + b < 4) ? "Below" : "Over"; //https://javascript.info/ifelse#rewrite-if-into

let login = "123";
let message = (login == "Employee") ? "Hello" : //https://javascript.info/ifelse#rewrite-if-else-into
  (login == "Director") ? "Greetings" : 
  (login == "") ? "No login" : ""; 

//Wann werden Nummern innerhalb eines Strings (="2") konvertiert und wann nicht?
//Nahezu immer, es seidenn ich vergleiche strikt oder addiere einen Nummern-String mit einer Nummer.



/**************************************************************/
/****************************07.06*****************************/
/**************************************************************/

//JAVASCRIPT DEBUGGING IN CHROME DEV TOOLS

//Alter Weg etwas zu debuggen, mittels console.log()'s an Position wo man denkt es gäbe einen Fehler':

let name = "Peter";

console.log(`Name lautet: ${name}`);

let testObject = {myName : "Peter",
                  myLastname: "Herzenberger"};
console.table(testObject);

