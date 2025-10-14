const btn = document.getElementsByTagName("button") 

Array.from(btn).forEach(btn => {
    btn.addEventListener("click", (e) => {
        box.style.backgroundColor = e.target.dataset.color
    })
})  