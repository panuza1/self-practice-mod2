let keyLog = document.getElementById("keyLog") 
let keyInput = document.getElementById("keyInput")
keyLog.style.color = 'black';


keyInput.addEventListener("keydown", function(e) {
    let key = e.key
    let p = document.createElement("p")
    p.textContent = "You passed : " + key
    console.log(key)
    result = keyLog.appendChild(p)
    
    if (key === "Enter") {
        p.style.color = "blue"
    } 
    
}) 



