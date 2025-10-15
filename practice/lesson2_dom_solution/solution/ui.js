import { addQuote, getAllQuotes } from './quote.js'

addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Do or do not. There is no try.', 'Yoda')
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')

let quotes = getAllQuotes()
const quoteList = document.getElementById('quote-list')

function renderQuotes() {
  // Clear the container
  quoteList.innerHTML = ''
  // Loop through each quote and create a <p> element
  quotes.forEach((quote) => {
    const p = document.createElement('p')
    p.textContent = `"${quote.content}" — ${quote.author}`
    quoteList.appendChild(p)
  })
}

renderQuotes()     
