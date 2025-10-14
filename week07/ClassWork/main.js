// Inclass อาจารย์ให้ทำ

//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types 
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent 

const div = document.getElementById("demo")
const p1Element = document.createElement("p")

p1Element.setAttribute("format", "italic");  // format="italic"
p1Element.innerHTML = "<i>Sample Italic Text</i>"
div.appendChild(p1Element) 

const p2Element = document.createElement("p");
p2Element.setAttribute("format","italic")
p2Element.innerText = "<i>Sample Italic Text</i>" 
div.appendChild(p2Element)   

const p3Element = document.createElement("p")
p3Element.setAttribute("format","italic")
p3Element.textContent = "<i>Sample Italic Text</i>" 
div.appendChild(p3Element) 


// innerText กับ textContent จะไม่มอง <i> ว่าเป็น tag มันจะตีความทั้งหมดเป็น text หมดเลย 