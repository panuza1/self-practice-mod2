// 3.goto the first child element node under <ul  id=

// -1-
// const allElement = document.getElementById("soup");
//
// let firstChild = allElement.firstElementChild;
// console.log(firstChild.textContent);
//
//
// let current = firstChild;
// while (current) {
//     console.log(current.textContent);
//     current = current.nextElementSibling;
// }

// -2-
//3. goto the first child element node under <ul id="soup"> and display all sibling nodes
//output :

/* <li class="meat">Spicy Bacon-Corn Soup</li>
        <li class="vegan">Vegetable Soup</li>
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li> */
// const ulElement = document.querySelector("#soup")
// // let currentNode = ulElement.children[0]
// let currentNode = ulElement.firstElementChild
// while (currentNode !== null) {
//     console.log(currentNode)
//     currentNode = currentNode.nextElementSibling
// }



// 1. getElementsByName() , return NodeList data type
const fnameElement = document.getElementsByName("fname")
console.log(fnameElement.length)  // 2
fnameElement.forEach(ele => console.log(ele)) 

// 2.getElementsByTagsName() , return HTMLCollection 
const inputElements = document.getElementsByTagName("input")
Array.from(inputElements).forEach(ele => console.log(ele)) 

// 3.getElementsByClassName(), return HTMLCollection (array-like) data type
const veganElements = document.getElementsByClassName("vegan")
Array.from(veganElements).forEach(ele => console.log(ele))
// forEach ออกมาหลายตัว 

// 4. find the first element of document that has an ID values "appetizer" or "soup" 

// 5. find all class "meat" elements under <ul id="appetizer"> or <ul id="soup"> only 
// 16272936   
// 029
const meats = document.querySelectorAll("#appetizer .meat, #soup .meat");
meats.forEach(el => console.log(el)); 


// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
//1.1 get its parent
const soupUlElement = document.getElementById("soup")
//1.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim().includes("Beef Soup")) refNode = element
})
//1.3 create node <li class="vegan">Cabbage Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class", "vegan")
//1.4 insertBefore(newNode, refNode)
soupUlElement.insertBefore(newNode, refNode)

// 2.remove Vegetable Soup 
// 2.1 get its parent 
// const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup 
// let refNode = null 
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") refNode = element
})
// 2.3 remove 
soupUlElement.removeChild(refNode) 

//  3. replace Beef Soup with Pork Soup
//3.1 get its parent
// const soupUlElement = document.getElementById("soup")
//3.2 get ref node -Beef Soup
// let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
//3.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//3.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)
   




