console.log(document.cookie)
// document.cookie = "theme=dark"
// document.cookie = "theme=light " 
// document.cookie = `theme-light;expires=${new Date(2025, 9, 16)}`
// document.cookie = "username=panupong; max-age=60"  


// import { CookieUtil } from "./myLib/CookieUtil.js"
// CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
// console.log(document.cookie)
// console.log(CookieUtil.get("cartId"))
// CookieUtil.unset("cartId")

// console.log(document.cookie)
// document.cookie = "theme=dark"
// document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
// document.cookie = "username=umaporn;max-age=60"

// sectionstorage

// let like = 1 
// if (sessionStorage.getItem("like") === null) {
//     sessionStorage.setItem("like", like)
// } else {
//     sessionStorage.getItem("like", ++like)
//     alert(like)
// }

//localstorage
let like = localStorage.getItem("like")
if (like === null) localStorage.setItem("like", 1)
else localStorage.setItem("like", ++like)
alert(localStorage.getItem("like"))



