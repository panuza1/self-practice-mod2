// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
    // TODO: Add the quote object to the quotes array
    quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
    // TODO: Remove the quote object from the array using the given id
    quotes.filter(quote => quote.id !== id)

}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
    // TODO: Find the quote by id and update its properties
    quotes.map((quote) => (quote.id !== id ? updateQuote : quote));

}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
    // TODO: Return the quotes array
    return quotes;
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()



function testQuotes() {
    console.log("Start Testing...");

    // Add 3 quotes
    addQuote({ id: 1, content: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" });
    addQuote({ id: 2, content: "Life is what happens when you're busy making other plans.", author: "John Lennon" });
    addQuote({ id: 3, content: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" });

    console.log("After adding 3 quotes:", getAllQuotes());

    // Delete 1 quote
    deleteQuote(2);
    console.log("After deleting quote with id=2:", getAllQuotes());

    // Update 1 quote
    updateQuote(3, { content: "What doesn’t kill you makes you stronger." });
    console.log("After updating quote with id=3:", getAllQuotes());

    console.log("Testing Complete.");
}

// Run the test
testQuotes();