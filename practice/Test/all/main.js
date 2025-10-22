// Quote Manager PRO - JavaScript Skeleton

// DOM Elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filterCategory");
const sortSelect = document.getElementById("sort");
const favBtn = document.getElementById("showFavoritesBtn");

const totalQuotesEl = document.getElementById("totalQuotes");
const totalFavoritesEl = document.getElementById("totalFavorites");
const totalCategoriesEl = document.getElementById("totalCategories");

// Data
let quotes = []; // will load from localStorage
let showFavoritesOnly = false;
let usedQuotes = []; // for Smart Random

// TODO 1: Load & Save Functions
function saveQuotes() {
	// Save quotes array to localStorage (key: "quotes")
	localStorage.setItem("quotes", JSON.stringify(quotes));
}

function loadQuotes() {
	// Load quotes from localStorage
	// Assign to 'quotes' array
	// Call renderQuotes()
	const saved = localStorage.getItem("quotes");
	if (saved) {
		quotes = JSON.parse(saved);
	}
	renderQuotes();
}

// TODO 2: Create, Update, Delete
function addQuote(content, author, category) {
	// Create new quote object with id, favorite=false, createdAt = Date.now()
	// Push to quotes[]
	// Save and render
	const newQuote = {
		id: Date.now().toString(),
		content,
		author,
		category,
		favorite: false,
		createdAt: Date.now(),
	};
	quotes.push(newQuote);
	saveQuotes();
	renderQuotes();
}

function updateQuote(id, content, author, category) {
	// Find quote by id and update fields
	// Save and render
	const quote = quotes.find((q) => q.id === id);
	if (quote) {
		quote.content = content;
		quote.author = author;
		quote.category = category;
	}
	saveQuotes();
	renderQuotes();
}

function deleteQuote(id) {
	// Remove quote by id from quotes[]
	// Save and render
	quotes = quotes.filter((index) => index.id !== id);
	saveQuotes();
	renderQuotes();
}
// function showALL() {
// 	quoteList.innerHTML = ""
// 	quotes.forEach((q) => {
// 		const el = renderQuotes(q)
// 		quoteList.appendChild(el)
// 	})
// }
// TODO 3: Render Quotes to DOM
function renderQuotes() {
	// Clear quoteList
	// Apply filter/search/sort/favorite logic
	// For each quote, create DOM element with:
	//   - content, author, category
	//   - buttons: Edit, Delete, Favorite toggle
	// Update stats
	quoteList.innerHTML = "";

	let filtered = getFilteredQuotes();

	filtered.forEach((q) => {
		let div = document.createElement("div");
		div.classList.add("quotes");
		div.dataset.id = quotes.id;

		// quotes content
		let p1 = document.createElement("p");
		p1.textContent = quotes.content;

		let p2 = document.createElement("p");
		p2.textContent = quotes.author;

		let p3 = document.createElement("p");
		p3.textContent = quotes.category;

		// Buttons
		const edit_btn = document.createElement("button");
		edit_btn.textContent = "Edit";
		edit_btn.addEventListener("click", () => {
			idInput.value = q.id;
			contentInput.value = q.content;
			authorInput.value = q.author;
			categoryInput.value = q.category;
		});

		const delete_btn = document.createElement("button");
		delete_btn.textContent = "Delete";
		delete_btn.addEventListener("click", () => deleteQuote(q.id));

		const favBtn = document.createElement("button");
		favBtn.textContent = q.favorite ? "★ Unfavorite" : "☆ Favorite";
		favBtn.addEventListener("click", () => {
			q.favorite = !q.favorite;
			saveQuotes();
			renderQuotes();
		});

		div.append(p1, p2, p3, edit_btn, delete_btn, favBtn);
		quoteList.appendChild(div);
	});
	updateStats();
}

// TODO 4: Search, Filter, Sort
function getFilteredQuotes() {
	// Filter by category
	// Filter by search text
	// If showFavoritesOnly = true, filter by favorite
	// Apply sorting (author/category/latest)
	// Return filtered array
	let filtered = [...quotes]
	// filter by category 
	const selectedCategory = filterSelect.value
	if (selectedCategory && selectedCategory !== "all") {
		filtered = filtered.filter((q) => q.category === selectedCategory)
	}
	// filter by fav
	if (showFavoritesOnly) {
		filtered = filtered.filter((q) => q.favorite)
	}
	// seach 
	const searchText = searchInput.value.toLowerCase();
	if (searchText) {
		filtered = filtered.filter((q) => 
			q.content.toLowerCase().includes(searchText) || 
			q.author.toLowerCase().includes(searchText)
		)
	}
	const sortOption = sortSelect.value;
	if (sortOption === "author") {
		filtered.sort((a, b) => a.author.localeCompare(b.author));
	} else if (sortOption === "category") {
		filtered.sort((a, b) => a.category.localeCompare(b.category));
	} else if (sortOption === "latest") {
		filtered.sort((a, b) => b.createdAt - a.createdAt);
	}
	return filtered ; 
} 

// TODO 5: Random Quote (Smart Random)
function showRandomQuote() {
	// If quotes are empty, show message
	// Pick a random quote not in usedQuotes[]
	// Display it
	// If all quotes used, reset usedQuotes
	if (quotes.length === 0) {
		randomDisplay.textContent = "No quotes available "
		return;
	}

	if (usedQuotes.length == quotes.length) {
		usedQuotes = []
	}
	let unused = quotes.filter((q) => !usedQuotes.includes(q.id))
	let randomQuotes = unused[Math.floor(Math.random() * unused.length)]
	usedQuotes.push(randomQuotes.id)

	randomDisplay.textContent = `"${randomQuotes.content}" - ${randomQuotes.author}`
}

// TODO 6: Update Stats
function updateStats() {
	// Update totalQuotesEl, totalFavoritesEl, totalCategoriesEl
	totalQuotesEl.textContent = quotes.length
	totalFavoritesEl.textContent = quotes.filter((q) => q.favorite).length

	const uniqueCategories = new Set(quotes.map((q) => q.category))
	totalCategoriesEl.textContent = uniqueCategories.size
}

// TODO 7: Event Listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();
	// If idInput has value => update, else add
	// Clear form fields
	const content = contentInput.value.trim();
	const author = authorInput.value.trim();
	const category = categoryInput.value.trim();
	const id = idInput.value.trim();

	if (content === "" || author === "" || category === "") return;

	if (id) {
		updateQuote(id, author, author, category);
	} else {
		addQuote(content, author, category);
	}

	renderQuotes()
	// // Clear form fields
	idInput.value = "";
	content.value = "";
	author.value = "";
	category.value = "";
});

randomBtn.addEventListener("click", showRandomQuote);
searchInput.addEventListener("input", renderQuotes);
filterSelect.addEventListener("change", renderQuotes);
sortSelect.addEventListener("change", renderQuotes);
favBtn.addEventListener("click", () => {
	showFavoritesOnly = !showFavoritesOnly;
	favBtn.textContent = showFavoritesOnly ? "Showing Favorites" : "Favorites";
	renderQuotes();
});

// TODO 8: Init
loadQuotes();
