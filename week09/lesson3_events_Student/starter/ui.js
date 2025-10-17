// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content")
const authorInput = document.getElementById("author") 
const idInput = document.getElementById("quoteId")
const randomBtn = document.getElementById("randomBtn")
const randomDisplay = document.getElementById("randomQuoteDisplay")

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
    
    const div = document.createElement("div")
    div.dataset.id = quote.id;

    const p1 = document.createElement("p")
    p1.textContent = quote.content

    const p2 = document.createElement("p")
    p2.textContent = quote.author

    const edit_btn = document.createElement("button")
    edit_btn.textContent = "Edit"
    edit_btn.className = "edit-btn"
    edit_btn.dataset.id = quote.id

    const delete_btn = document.createElement("button")
    delete_btn.textContent = "Delete"
    delete_btn.className = "delete-btn"
    delete_btn.dataset.id = quote.id

    edit_btn.addEventListener("click", () => updateQuoteInDOM(quote))
    delete_btn.addEventListener("click", () => deleteQuoteFromDOM(quote.id))

    div.append(p1, p2, edit_btn,delete_btn)
    return div;

}
// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
    quotes.push(quote)
    renderQuotes()
}
function updateQuoteInDOM(quote) {
    idInput.value = quote.id
    contentInput.value = quote.content
    authorInput.value = quote.author
}
function deleteQuoteFromDOM(id) {
    quotes = quotes.filter((q) => q.id !== id)
    renderQuotes()
}
function renderQuotes() {
    quoteList.innerHTML = ""
    quotes.forEach((q) => {
        const el = createQuoteElement(q)
        quoteList.appendChild(el)
    })
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
    // Update existing quote
    quotes = quotes.map((q) =>
      q.id === id ? { id, content, author } : q
    );
  } else {
    // Add new quote
    const newQuote = {
      id: Date.now().toString(),
      content,
      author,
    };
    addQuoteToDOM(newQuote);
  }

  renderQuotes();
  form.reset();
  idInput.value = "";
});

randomBtn.addEventListener("click", showRandomQuote);