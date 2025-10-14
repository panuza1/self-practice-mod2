const addbtn = document.getElementById("add")
const rmbtn = document.getElementById("remove")
const tgbtn = document.getElementById("toggle")
const box = document.getElementById("box")
addbtn.addEventListener("click", () => {
    // write code here ..
    box.classList.add('bordered')
})
rmbtn.addEventListener("click", () => {
    box.classList.remove('bordered')
})
tgbtn.addEventListener("click", () => {
    box.classList.toggle('bordered')
})

