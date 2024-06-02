const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xBtn = document.getElementById("x");
const newQuoteBtn = document.getElementById("newQuote");

let apiQuotes = []

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if (!quote.author){
        authorText.textContent="Unknown"
    }else{
        authorText.textContent= quote.author
    }
    quoteText.textContent=quote.text
}

async function getQuotes(){
    const apiUrl="https://type.fit/api/quotes"
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        newQuote();
    } catch (error) {
        
    }
}

function xQuote(){
    const xUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(xUrl,'_blank');
}

newQuoteBtn.addEventListener("click",newQuote);
xBtn.addEventListener('click',xQuote);
getQuotes() 