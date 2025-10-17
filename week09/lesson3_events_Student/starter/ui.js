// Lesson 3 - Events Starter

let quotes = [];

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
    // a quote element example
    //<section id="quote-list">
    //  <div data-id="1">
    //    <p>Confidence comes from discipline and training</p>
    //    <p>Robert</p>
    //    <button class="edit-btn" data-id="1">
    //      Edit
    //    </button>
    //    <button class="delete-btn" data-id="1">
    //      Delete
    //    </button>
    //  </div>
    // </section>

    // test
    //     const div = document.createElement("div");
    //     div.dataset.id = quote.id;

    //     div.innerHTML = `
    //     <p>"${quote.content}"</p>
    //     <p>${quote.author}</p>
    //     <button class="edit-btn" data-id="${quote.id}">Edit</button>
    //     <button class="delete-btn" data-id="${quote.id}">Delete</button>
    //   `;

    //     return div;

    const div = document.createElement("div");
    div.dataset.id = quote.id;

    div.innerHTML = `
        <p>"${quote.content}"</p>
        <p>"${quote.author}"</p>
        <button class="edit-btn" data-id="${quote.id}">Edit</button>
        <button class="delete-btn" data-id="${quote.id}">Delete</button>
    `;
    return div;
}
// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
    quotes.push(quote);
    renderQuotes();
}
function updateQuoteInDOM(quote) {
    idInput.value = quote.id;
    contentInput.value = quote.content;
    authorInput.value = quote.author;
}
function deleteQuoteFromDOM(id) {
    quotes = quotes.filter((q) => q.id !== id);
    renderQuotes();
}
function renderQuotes() {
    quoteList.innerHTML = "";
    quotes.forEach((q) => {
        const el = createQuoteElement(q);
        quoteList.appendChild(el);
    });
}
function showRandomQuote() {
    if (quotes.length === 0) {
        randomDisplay.textContent = "No quotes yet!";
        return;
    }

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    randomDisplay.innerHTML = `<blockquote>"${random.content}"</blockquote><p>— ${random.author}</p>`;
}

// Event listeners for form submission, edit, and delete clicks
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const content = contentInput.value.trim();
    const author = authorInput.value.trim();
    const id = idInput.value;

    if (content === "" || author === "") return;
    if (id) {
        quotes = quotes.map((q) => {
            if (q.id === id) {
                return {id, author, content} 
            } else {
                return q
            }
        })   
    } else {
        const newQuotes = {
            id: Date.now(),
            content,
            author
        }
        addQuoteToDOM(newQuotes)
    }

    renderQuotes()
    form.reset();
    idInput.value = ""
}); 

randomBtn.addEventListener("click", showRandomQuote);