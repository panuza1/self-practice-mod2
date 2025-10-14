// 1.display all child nodes under <ul id="appetizer">

const appetizer = document.getElementById("appetizer");

const ulElement = document.querySelector("#appetizer");
console.log(ulElement);
const meatAllElement = document.querySelectorAll(".meat"); // return NodeList
console.log(meatAllElement);

meatAllElement.forEach(el => console.log(el));

console.log(appetizer.childNodes);
console.log(appetizer.childNodes[0]);

// 2.find meat element that has text value contains "soup"
const meatSoup = Array.from(meatAllElement).filter(item =>
    item.textContent.toLowerCase().includes("soup")
);

// Array.from  แปลง ให้เป็น Array เพื่อที่จะได้เอาไป filter ต่อ  includes
console.log(meatSoup);

const allitem = document.querySelectorAll("li")
allitem.forEach(item => {
    if (item.textContent.toLowerCase().includes("soup")) {
        console.log(item.textContent);
    }
    }
)

