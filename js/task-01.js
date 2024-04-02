// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");

console.log("Number of categories : ", listItem.length);

listItem.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const items = item.querySelectorAll("li").length;
  console.log("Category: ", category);
  console.log("Elements: ", items);
});
