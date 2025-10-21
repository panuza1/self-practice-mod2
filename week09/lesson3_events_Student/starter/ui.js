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

// Create a quote element in the DOM
function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.dataset.id = quote.id;

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

// Fill form with quote data for editing
function updateQuoteInDOM(quote) {
  idInput.value = quote.id;
  contentInput.value = quote.content;
  authorInput.value = quote.author;
}

// Delete quote from array and re-render
function deleteQuoteFromDOM(id) {
  quotes = quotes.filter((q) => q.id !== id);
  //   ถ้า ไม่เท่ากัน (จริง) → เก็บ quote นั้นไว้ใน array ใหม่
  // ถ้า เท่ากัน (เท็จ) → เอา quote นั้นออก
  renderQuotes();
}

// Render all quotes to the DOM
function renderQuotes() {
  quoteList.innerHTML = "";
  quotes.forEach((q) => {
    const el = createQuoteElement(q);
    quoteList.appendChild(el);
  });
}

// Display a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    randomDisplay.textContent = "No quotes yet!";
    return;
  }

  const random = quotes[Math.floor(Math.random() * quotes.length)];
  randomDisplay.innerHTML = ` <blockquote>"${random.content}"</blockquote><p>— ${random.author}</p>`;
}

// Handle form submission 
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
    quotes.push(newQuote); 
  }

  renderQuotes();
  form.reset();
  idInput.value = "";
});

// Show random quote when button is clicked
randomBtn.addEventListener("click", showRandomQuote); 
