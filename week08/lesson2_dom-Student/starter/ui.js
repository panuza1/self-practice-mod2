// Step 1: Create an array to hold quote objects
const quotes = []; 


// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list") 

// Step 3: Define a function called renderQuotes() // แสดง
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function addQuote(text, author) {
    const quote = {
        text: text,
        author: author
    }
    quotes.push(quote)
}

function renderQuotes() {
    // clear
    quoteList.innerHTML = ""; 

    // loop 
    quotes.forEach((quote) => {
        const p = document.createElement("p") 
        p.textContent = `"${quote.text}" - ${quote.author}` 
        quoteList.appendChild(p);
    })
} 

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
renderQuotes();

