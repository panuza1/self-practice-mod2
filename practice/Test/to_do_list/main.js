/*
=========================
DOM & Events Practice
=========================

💡 ทำตามโจทย์ด้านล่างนี้ โดยแก้ไข/เขียนโค้ดใน main.js
*/

// 📝 โจทย์ 1: To-do List
// 1. ดึง input (#todo-input) และปุ่ม (#add-btn)
// 2. เมื่อกดปุ่ม Add:
//    - สร้าง <li> ใหม่ และใส่ข้อความจาก input
//    - ใส่ปุ่มลบ "Delete" ต่อท้าย <li>
//    - ลบ <li> เมื่อลูกค้ากดปุ่มลบ 
//    - เปลี่ยนสี background <li> ถ้าคลิก <li> (ไม่ใช่ปุ่มลบ)
// 3. ใช้ event delegation แทนการใส่ event ให้แต่ละ <li>

let add_btn =  document.querySelector("#add-btn")
add_btn.addEventListener("click", () => { 
    console.log("click add_btn")
    let todo_input = document.querySelector("#todo-input")
    let text = todo_input.value.trim()

    let li = document.createElement("li")
    li.textContent = text

    let button = document.createElement("button")
    button.textContent = "Delete"

    button.addEventListener("click", () =>{
        li.remove()
        button.remove()
        console.log("click delete")
    })

    let todo_list = document.getElementById("todo-list")
    todo_list.appendChild(li)
    todo_list.appendChild(button)

})  

// 🎨 โจทย์ 2: ตารางสี
// 1. สร้าง table 5x5 (#color-table) ด้วย createElement
// 2. เมื่อ mouseover cell → เปลี่ยนสี background
// 3. เมื่อ mouseout → กลับสีเดิม
// 4. เมื่อคลิก cell → alert แสดงข้อความ "คุณคลิกที่ row X, col Y"
const color_table = document.getElementById("color-table")
for (let i=0; i<5; i++) {
    const tr_table = document.createElement("tr")
    for (let j=0; j<5; j++) {
        const th_table = document.createElement("td") 
        tr_table.appendChild(th_table)

        th_table.addEventListener("mouseover", () => {
            th_table.style.backgroundColor = "lightblue"
        })
        th_table.addEventListener("mouseout", () => {
            th_table.style.backgroundColor = ""
        })
    }
    color_table.appendChild(tr_table)
}

// 🌙 โจทย์ 3: Toggle Dark Mode
// 1. ดึงปุ่ม (#toggle-dark)
// 2. เมื่อกด → toggle class "dark" ให้ <body>
// 3. จำสถานะ dark/light ใน localStorage
// 4. โหลดหน้าใหม่ → ให้ dark/light mode เป็นไปตาม localStorage

let btn_toggle_dark = document.getElementById("toggle-dark")

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark")
}

btn_toggle_dark.addEventListener("click", () => {
  document.body.classList.toggle("dark")

  // Save current mode to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }

  console.log("click btn toggle dark")
})


// 🧾 โจทย์ 4: Form Validation
// 1. ดึงฟอร์ม (#user-form) และ input fields (#name, #email, #password)
// 2. เมื่อ submit form:
//    - ตรวจสอบทุก input ไม่ว่าง
//    - ตรวจสอบ email ต้องมี "@"
//    - ถ้า input ผิด → แสดงข้อความ error ใต้ input (#name-error, #email-error, #pass-error)
//    - ถ้าถูกต้อง → alert "Form submitted successfully"
// 3. ห้ามให้หน้า reload หลัง submit (ใช้ preventDefault)

let user_form = document.getElementById("user-form") 
let name_input = document.querySelector("#name")
let email_input = document.querySelector("#email") 
let password_input = document.querySelector("#password")
let submit_btn = document.getElementsByTagName("button") 

user_form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit")
    let name = name_input.value.trim()
    let email = email_input.value.trim()
    let password = password_input.value.trim()

    // เคลียร์ error เดิม
    document.getElementById("name-error").textContent = ""
    document.getElementById("email-error").textContent = ""
    document.getElementById("pass-error").textContent = ""

    let hasError = false

    // ตรวจ name
    if (!name) {
        document.getElementById("name-error").textContent = "กรุณากรอกชื่อ"
        hasError = true
    }

    // ตรวจ email
    if (!email) {
        document.getElementById("email-error").textContent = "กรุณากรอกอีเมล"
        hasError = true
    } else if (!email.includes("@")) {
        document.getElementById("email-error").textContent = "อีเมลต้องมี @"
        hasError = true
    }
    
    if (!password) {
        document.getElementById("pass-error").textContent = "กรุณากรอก password"
        hasError = true
    } 

    if (!hasError) {
        alert("Form submitted successfully")
    }
})