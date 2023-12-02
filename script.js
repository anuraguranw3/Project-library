function workingProperly() {
    alert("working properly");
}

const btn1 = document.querySelector("#add-books");

btn1.addEventListener('click', () => {
    workingProperly();
})