<<<<<<< HEAD
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const btn = document.getElementById('submit')
const text_action = document.querySelector("form>p")

btn.addEventListener("submit", (event) => {
    e.preventDefault();


})


=======
const btn_create = document.getElementById("submit")
const username = document.getElementById("username") 
const email = document.getElementById("email") 
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm-password") 
const text = document.querySelector("p")

btn_create.addEventListener("click", (e) => {
    e.preventDefault()    
    if (!username.value || !email.value || !password.value || !confirm_password.value) {
        text.textContent = "missing some value, please by again!"
        text.style.color = "red "
    } else if (password.value !== confirm_password.value){
        text.textContent = "password and comfirm do not match, check again"
        text.style.color = "red"
    } else {
        console.log(username.value)
        text.textContent = "your data completed"
        text.style.color = "green"
    }
}) 
>>>>>>> 9b0c0c5b5efd5a216e3759aa1195c1ba07232924
