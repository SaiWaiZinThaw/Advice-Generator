const id = document.querySelector("#id");
const quote = document.querySelector("#quote");
const Btn = document.querySelector("#Btn");

function fetchApi() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Connection Error.");
      }
      return response.json();
    })
    .then((data) => {
      id.innerText = data.slip.id;
      quote.innerText = data.slip.advice;
    });
}

window.addEventListener("load", fetchApi);

Btn.addEventListener("click", fetchApi);
