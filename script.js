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

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', function () {
    add();
})
let li, removeBtn;
function add() {
    const listContainer = document.querySelector("#ulist");
    const bookName = document.getElementById("book");
    const bookAuthor = document.getElementById("author");
    const bookPage = document.getElementById("page");

    let name = bookName.value;
    let author = bookAuthor.value;
    let page = bookPage.value;

    if (name === "" || author === "" || page === "") {
        alert("Fill all the info");
    }
    else {
        li = document.createElement("li")
        let nh2 = document.createElement("h2");
        let ah2 = document.createElement("h2");
        let ph3 = document.createElement("h3");

        nh2.innerHTML = name;
        ah2.innerHTML = author;
        ph3.innerHTML = page;

        li.appendChild(nh2);
        li.appendChild(ah2);
        li.appendChild(ph3);
        removeBtn = document.createElement("button");
        removeBtn.innerHTML = "remove";
        li.appendChild(removeBtn);

        listContainer.appendChild(li);


        libraryForm.style.display = "none";
        bgBlur.setAttribute("class", "bg");
    }
    bookAuthor.value = "";
    bookName.value = "";
    bookPage.value = "";
}