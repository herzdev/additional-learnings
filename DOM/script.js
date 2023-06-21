/*Genereller Ablauf von nachfolgend stehenden Source:
1. Greife auf div-Element mit id="container" zu
2. Erstelle eine neue div-Node
3. Füge der neuen div-Node ein class-Attribut mit dem namen "content" hinzu
4. Füge der neuen div-Node einen Text namens "This is the glorious text-content" hinzu.
Dadurch entsteht folgendes End-Element:
<div class="content">This is the glorious text-content!</div>
5. Füge mittels container.appendChild(content) die neue Node in das DOM hinzu.
Diese Node wird als letzte Node innerhalb des Parent-Nodes mit der id="container" hinzugefügt: Nachdem bereits eine div-Node im parent-Node vorhanden ist, wird die neue erstellte div-Node unter dieser platziert. Order: parent-Node > div-Node + danach: div-Node (new)
*/

const container = document.querySelector("#container"); //greift auf div Node mit id="contaienr" zu

// console.log(container);

const content = document.createElement("div"); //Erstellt neue div-Node

content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//TOP exercise https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise

//1. a <p> with red text that says “Hey I’m red!”

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

//2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerText = "I'm a blue h3!";

container.appendChild(h3);

//3. a <div> with a black border and pink background color with the following elements inside of it:

const newDiv = document.createElement("div");
newDiv.style.cssText = "border: solid black 1px; background-color: pink;";

const h1 = document.createElement("h1");
const newP = document.createElement("p");

h1.innerText = "I'm in a div";
newP.innerText = "ME TOO!";

newDiv.appendChild(h1);
newDiv.appendChild(newP);

container.appendChild(newDiv);