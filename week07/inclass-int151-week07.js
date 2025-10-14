// inclass

console.log("De ja")
console.log(document) // root node  คลุม ทุก node เลย
console.log(typeof document)

console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) // null
console.log(htmlElement.parentNode) // null

if (htmlElement.parentNode === document) {    
    console.log("parent of html is a root node ")
}

console.log("this is firstchild",document.firstChild)
console.log("firstChild.nextSibling",document.firstChild.nextSibling)
console.log("this is firstElementChild",document.firstElementChild)
console.log("firstElementchild",document.firstElementChild)
console.log(document.firstChild.previousSibling) // null
console.log("this is lastchild",document.lastChild)
console.log("this is lastElementChild",document.lastElementChild)

// get all child nodes under <div id'123'>
const divElement = document.getElementById("123")
const divChildNodes = divElement.childNodes // get all

//node types children (NodeList, can use forEach)
console.log(divChildNodes.length)
divChildNodes.forEach((child) => console.log(child))

//3.get only Element node types childern (return (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children;
console.log("this divChildren.length = ",divChildren.length) // 2
// have 2 solution
for (let i=0; i<divChildren.length; i++) {
    console.log(divChildren[i])
}
Array.from(divChildren).forEach((child) => console.log(child))


// need to list : <div id="123" style="color: red;">
// const divElement = document.getElementById("123")

const divAttrs = divElement.attributes
console.log(divAttrs.length)
for (let i=0; i<divAttrs.length; i++) {
    const attrName = divAttrs[i].name
    const attrValue = divAttrs[i].value

    console.log(`attribute name: ${attrName}, attribute value : ${attrValue}`)
}

console.log(divElement.getAttribute("id"))
console.log(divElement.getAttribute("style"))



// what is the node type of first child of root node
// if node type is an HTML node, display "hello, HTML node", otherwise, display "Hello, any node"
const  fcOfrn = (document.firstChild.nodeType)
console.log(fcOfrn)

if (fcOfrn === Node.DOCUMENT_NODE) {
    console.log("hello, HTML node")
} else {
    console.log("Hello, any node")
}


// 1 create <p></p>
const pElement = document.createElement("p")
// 2 create id="5"
const idAttr = document.createAttribute("id")
idAttr.value = "p5"
// 3 binding id="p5" to <p>
pElement.setAttributeNode(idAttr)
// 4 create text value '#5'
const pText = document.createTextNode("#5")
// 5 binding '#5' to <p>
pElement.appendChild(pText)
// 6 binding <p id="p5">#</p> to <body>
const body = document.body
body.appendChild(pElement)



let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.innerText)

