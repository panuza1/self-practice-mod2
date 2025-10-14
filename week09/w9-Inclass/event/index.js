const btn = document.querySelector("div>button")
// console.log(btn) 

// 1. add event with annonymous handle function 
/*    

    btn.addEventListener("click", e => {
        console.log("Submit button was clicked!")
    })
    btn.removeEventListener("click", () => {
        console.log("Submit button was clicked!")
    })
    // this is solution doesn't work

*/

// 2. add event with named function 
/* 

    const handleBtn = () => {
        console.log("Submit button was clicked!")
    }
    btn.addEventListener("click", handleBtn)
    btn.removeEventListener("click", handleBtn)
    // work 
*/
/*
btn.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.eventPhase) 
    console.log("Submit button was clikced!")
})

const divElement = document.querySelector("div")
divElement.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
    console.log("Div was clicked!")
})

const bodyElement = document.body
bodyElement.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
    console.log("Body was clicked!")
})
*/

//////////////////
// reduce event //
//////////////////
// const bolt = document.querySelector('img')
// const submitbutton = document.querySelector("div>button")
// const divElement = document.querySelector("div")
// const bodyElement = document.querySelector("body")
 
// function logEvent(event, message) {
//     console.log('target:', event.target)
//     console.log('currentTarget:', event.currentTarget)
//     console.log('eventPhase:', event.eventPhase)
//     if (message) console.log(message)
// }
 
// if (submitbutton) {
//     submitbutton.addEventListener('click', (event) => {
//         logEvent(event, "Submit button was clicked!")
//     })
// }
 
// if (divElement) {
//     divElement.addEventListener('click', (event) => {
//         logEvent(event, "Div was clicked!!")
//     })
// }
 
// if (bodyElement) {
//     bodyElement.addEventListener('click', (event) => {
//         logEvent(event, "body was clicked!!")
//     })
// }

//////////////////
// output Dom   //
//////////////////
// const aLink = document.querySelector("a") 
// aLink.addEventListener("click", (e) => {
//     e.preventDefault(); 
//     console.log("Web visit")
// })

// document.addEventListener('DOMContentLoaded', () => {
//  console.log('DOM is ready!')
//  const heading = document.createElement('h2')
//  heading.textContent = 'This was added when DOM was ready!'
//  document.body.appendChild(heading)
//  console.log('Heading added now.')
//  })
//  window.addEventListener('load', () => {
//  console.log('All resources (images, CSS, scripts) are fully loaded!')
//  console.log('Page is fully loaded')
//  })



//////////////////
// เบลอ         //
//////////////////
// const fName = document.getElementById("fname")
// const lName = document.getElementById("lname")
// const message = document.getElementById("message")

// function checkEmpty(e) {
//   console.log(e)
//   if (e.target.value.trim().length === 0) {
//     message.style.color = "red"
//     message.textContent = `your ${e.target.id} is empty`
//   }
// }
// fName.addEventListener("blur", checkEmpty)
// lName.addEventListener("blur", checkEmpty)


// const info = document.getElementById("info");
//  // Window resize event
//  window.addEventListener("resize", () => {
//    info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`;
//  });
//  // Window scroll event
//  window.addEventListener("scroll", () => {
//    info.textContent = `Scrolled to Y: ${window.scrollY}`;
//  });

const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
    console.log(event.key)
    console.log(event)
})

const msg = document.querySelector("#msg")
const display = document.querySelector("p")
msg.addEventListener("input", function() {
    display.textContent = msg.value
})
