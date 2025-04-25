const library = document.getElementById("libraryList");
let page = 1;
const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID(); // <-- unique identifier
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);

    myLibrary.push(book)
}

function deleteBook(id) {
    for (let i = 0; i < myLibrary.length(); i++) {
        if (myLibrary[i].id === id) {
            myLibrary.splice(i, 1)
            break
        }
    }
}

addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Oliver", "oliver", 123)
addBookToLibrary("Saleem", "Saleem", 123)
addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Oliver", "oliver", 123)
addBookToLibrary("Saleem", "Saleem", 123)

function LoadBooks(page) {
    library.innerHTML = null
    let curIndex = page * 10
    let maxIndex = Math.min((page * 10 - 1) + 10, myLibrary.length)
    for (i = curIndex; i <= maxIndex; i++) {
        let newChild = document.createElement("li")
        let newContext = document.createTextNode(`Title: ${myLibrary[i].title} Author: ${myLibrary[i].author}
            Pages: ${myLibrary[i].pages} Read: ${myLibrary[i].read ? 'Yes' : "No"} `)
        newChild.appendChild(newContext)
        library.appendChild(newChild)
        let newdelete = document.createElement("button")
        newContext = document.createTextNode(`X`)
        newdelete.appendChild(newContext)
        newdelete.classList.add("bigDelete")
        let newRead = document.createElement("button")
        newContext = document.createTextNode("✓")
        newRead.appendChild(newContext)
        newRead.classList.add("bigRead")
        let fillerDiv = document.createElement("div")
        fillerDiv.appendChild(newRead)
        fillerDiv.appendChild(newdelete)
        newChild.appendChild(fillerDiv)

    }
}

LoadBooks(1 - 1);