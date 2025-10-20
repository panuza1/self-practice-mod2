// Quote Manager PRO - JavaScript Skeleton

// DOM Elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const categoryInput = document.getElementById('category')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')
const searchInput = document.getElementById('search')
const filterSelect = document.getElementById('filterCategory')
const sortSelect = document.getElementById('sort')
const favBtn = document.getElementById('showFavoritesBtn')

const totalQuotesEl = document.getElementById('totalQuotes')
const totalFavoritesEl = document.getElementById('totalFavorites')
const totalCategoriesEl = document.getElementById('totalCategories')

// Data
let quotes = [] // will load from localStorage
let showFavoritesOnly = false
let usedQuotes = [] // for Smart Random

// TODO 1: Load & Save Functions
function saveQuotes() {
  // Save quotes array to localStorage (key: "quotes")
}

function loadQuotes() {
  // Load quotes from localStorage
  // Assign to 'quotes' array
  // Call renderQuotes()
}

// TODO 2: Create, Update, Delete
function addQuote(content, author, category) {
  // Create new quote object with id, favorite=false, createdAt = Date.now()
  // Push to quotes[]
  // Save and render
}

function updateQuote(id, content, author, category) {
  // Find quote by id and update fields
  // Save and render
}

function deleteQuote(id) {
  // Remove quote by id from quotes[]
  // Save and render
}

// TODO 3: Render Quotes to DOM
function renderQuotes() {
  // Clear quoteList
  // Apply filter/search/sort/favorite logic
  // For each quote, create DOM element with:
  //   - content, author, category
  //   - buttons: Edit, Delete, Favorite toggle
  // Update stats
}

// TODO 4: Search, Filter, Sort
function getFilteredQuotes() {
  // Filter by category
  // Filter by search text
  // If showFavoritesOnly = true, filter by favorite
  // Apply sorting (author/category/latest)
  // Return filtered array
}

// TODO 5: Random Quote (Smart Random)
function showRandomQuote() {
  // If quotes are empty, show message
  // Pick a random quote not in usedQuotes[]
  // Display it
  // If all quotes used, reset usedQuotes
}

// TODO 6: Update Stats
function updateStats() {
  // Update totalQuotesEl, totalFavoritesEl, totalCategoriesEl
}

// TODO 7: Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // If idInput has value => update, else add
  // Clear form fields
})

randomBtn.addEventListener('click', showRandomQuote)
searchInput.addEventListener('input', renderQuotes)
filterSelect.addEventListener('change', renderQuotes)
sortSelect.addEventListener('change', renderQuotes)
favBtn.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly
  favBtn.textContent = showFavoritesOnly ? 'Showing Favorites' : 'Favorites'
  renderQuotes()
})

// TODO 8: Init
loadQuotes()
