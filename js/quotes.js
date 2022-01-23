const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const url = "https://api.quotable.io/random?tags=famous-quotes";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const quoteApi = data.content;
    const authorApi = data.author;
    quote.innerText = quoteApi;
    author.innerText = authorApi;
  });
