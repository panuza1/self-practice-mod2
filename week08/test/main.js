let text = document.getElementById("divA").textContent; 
console.log(document.getElementById("divA").textContent = "This is is different")
console.log(text)


const yourName = prompt("what is your name? ") 
console.log(yourName) 
const comfirmName = null 

if(yourName?.trim().length !== 0 && yourName?.trim() !== null) {
    comfirmName = confirm(`Are you ${yourName} ?`)
}
comfirmName ? alert(`Hello, ${yourName}`) : alert(`Hello, guest`) 
