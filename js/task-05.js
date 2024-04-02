// Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input),
// înlocuiește valoarea lui span#name - output cu valoarea curentă din input#name - input.
//Dacă input - ul este gol, în acel span se va afișa "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputValue = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputValue.addEventListener("input", () => {
  const newName = inputValue.value.trim();
  outputName.textContent = newName ? newName : "Anonymous";
});
