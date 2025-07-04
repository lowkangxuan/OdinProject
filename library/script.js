const library = [];
const bookListDisplay = document.getElementById("book-list");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("pages");
const isReadInput = document.getElementById("read-status");
const submitBtn = document.getElementById("add-book");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewBook();
    form.reset();
});

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.getInfo = function() {
    return (`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Is Read: ${this.isRead}`);
}

function createNewBook() {
    const newBook = new Book(titleInput.value, authorInput.value, pageInput.value, isReadInput.value);
    library.push(newBook);
    refreshBookListDisplay();
}

function refreshBookListDisplay() {
    library.forEach(element => {
        console.log(element);
    });
}