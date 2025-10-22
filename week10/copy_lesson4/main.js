let quotes = [];

const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const content_input = document.getElementById("content");
const author_input = document.getElementById("author");
const id_input = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");


function createQuoteElement(quote) {
    const div = document.createElement("div");
    div.dataset.id = quote.id;
    // เราสามารถ กำหนดค่าได้ หรือเข้าถึงค่าก็ได้ โดยใช้ div.dataset.id

    const p1 = document.createElement("p");
    p1.textContent = quote.content;

    const p2 = document.createElement("p");
    p2.textContent = quote.author;

    const edit_btn = document.createElement("button");
    edit_btn.textContent = "Edit";
    edit_btn.className = "edit-btn";
    edit_btn.dataset.id = quote.id;

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";
    delete_btn.className = "delete-btn";
    delete_btn.dataset.id = quote.id;

    edit_btn.addEventListener("click", () => updateQuoteInDOM(quote));
    delete_btn.addEventListener("click", () => deleteQuoteFromDOM(quote.id));

    div.append(p1, p2, edit_btn, delete_btn);
    return div;
}

function updateQuoteInDOM(quote) {
    id_input.value = quote.id;
    content_input.value = quote.content;
    author_input.value = quote.author;
}   

// Delete quote from array and re-render
function deleteQuoteFromDOM(id) {
    quotes = quotes.filter((q) => q.id !== id); // ไม่เท่า เก็บ quotes ตัวนั้นไว้ใน array ใหม่  ถ้า เท่ากัน มันจะได้เท็จ เท่ากับเอา quotes นั้นออก
    renderQuotes();
}

// Render all quotes to the DOM
function renderQuotes() {
    quoteList.innerHTML = "";
    quotes.forEach((q) => {
        const el = createQuoteElement(q)
        quoteList.appendChild(el);
    });
}

// Display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        randomDisplay.textContent = "No quotes yet ja";
    }

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    randomDisplay.innerHTML = `<blockquote>"${random.content}"</blockquote><p>-${random.author}</p>`;
}

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const content = content_input.value.trim();
    const author = author_input.value.trim();
    const id = id_input.value.trim();
    
    console.log(content)
    console.log(author)


    if (content === "" || author === "") return;

    if (id) {
        // if "id" has truthly value then run {...}
        // Update existing quote
        quotes = quotes.map((q) => {
            if (q.id === id) {
                return { id, content, author };
            } else {
                return q;
            }
        });
    } else {
        const newQuote = {
            id: Date.now().toString(),  
            content,
            author,
        };
        quotes.push(newQuote);
    }
    saveQuotes()
    renderQuotes();
    form.reset();
    id_input.value = "";
});

// Show random quote when button is clicked
randomBtn.addEventListener("click", showRandomQuote);

function loadQuotes() {
    const saved = localStorage.getItem("quotes")   // ใช้ getItem ใช้อ่าน 
    if(saved) {
        quotes = JSON.parse(saved)     // แปลง string กลับเป็น array/object   
    }
    renderQuotes()
}
function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes))   
}

loadQuotes()