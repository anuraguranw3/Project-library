const addBooks = document.querySelector("#add-books");
const libraryForm = document.querySelector(".lib-form");
let bgBlur = document.querySelector(".bg");

addBooks.addEventListener('click', () => {
    libraryForm.style.display = "block";
    bgBlur.setAttribute("class", "bg-blur");
})

const backBtn = document.querySelector("#back");
backBtn.addEventListener('click', () => {
    libraryForm.style.display = "none";
    bgBlur.setAttribute("class", "bg");
})