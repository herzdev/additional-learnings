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

