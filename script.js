const library = document.getElementById("libraryList");
const addButton = document.getElementById("addButton");
const listContainer = document.getElementById("listContainer");
const formContainer = document.getElementById("formContainer");
const returnHomeForm = document.getElementById("returnHomeForm");
const bookData = document.getElementById("bookData");
const pageNum = document.getElementById("pageNum");
const pageMin = document.getElementById("pageMin");
const pageAdd = document.getElementById("pageAdd");
let page = 1;
const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID(); // <-- unique identifier
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read = false) {
    let book = new Book(title, author, pages, read);

    myLibrary.push(book)

}

function deleteBook(id) {
    console.log(myLibrary)
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === id) {
            myLibrary.splice(i, 1)
            console.log(myLibrary)
            break
        }
    }
    page = 1
    pageNum.innerText = 1
    LoadBooks(page - 1)
}

function read(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === id) {
            myLibrary[i].read = true
            break
        }
    }
    LoadBooks(page - 1)
}

addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)
addBookToLibrary("Charlie", "charlie", 123)
addBookToLibrary("James", "james", 123)
addBookToLibrary("Sarah", "sarah", 123)
addBookToLibrary("Jen", "jen", 123)

function LoadBooks(page) {
    console.log(myLibrary)
    library.innerText = null
    let curIndex = page * 10
    let maxIndex = Math.min((page * 10 - 1) + 10, myLibrary.length - 1)
    for (i = curIndex; i < maxIndex + 1; i++) {
        console.log(i)
        let newChild = document.createElement("li")
        let newContext = document.createTextNode(`Title: ${myLibrary[i].title} Author: ${myLibrary[i].author}
            Pages: ${myLibrary[i].pages} Read: ${myLibrary[i].read ? 'Yes' : "No"} `)
        newChild.appendChild(newContext)
        library.appendChild(newChild)
        let newdelete = document.createElement("button")
        newContext = document.createTextNode(`X`)
        newdelete.appendChild(newContext)
        newdelete.classList.add("bigDelete")
        let id = myLibrary[i].id;
        newdelete.addEventListener("click", () => {
            deleteBook(id);
        })
        let newRead = document.createElement("button")
        newContext = document.createTextNode("✓")
        newRead.appendChild(newContext)
        newRead.classList.add("bigRead")
        newRead.addEventListener("click", () => {
            read(id);
        })
        let fillerDiv = document.createElement("div")
        fillerDiv.appendChild(newRead)
        fillerDiv.appendChild(newdelete)
        newChild.appendChild(fillerDiv)

    }
}

LoadBooks(page - 1);

addButton.addEventListener("click", () => {
    listContainer.style.display = "none";
    formContainer.style.display = "block";
})

returnHomeForm.addEventListener("click", (e) => {
    e.preventDefault();
    listContainer.style.display = "block";
    formContainer.style.display = "none";
    LoadBooks(page - 1);
})

bookData.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(bookData.elements["title"].value, bookData.elements["author"].value,
        bookData.elements["pages"].value, bookData.elements["read"].checked ? true : false);
})


pageMin.addEventListener("click", () => {
    if (page - 2 * 10 < myLibrary.length && page - 1 > 0) {
        page = page - 1;
        pageNum.innerText = page;
        LoadBooks(page - 1);
    }
    else {
        page = 1
    }
})

pageAdd.addEventListener("click", () => {
    if (page * 10 < myLibrary.length && page + 1 > 0) {
        page = page + 1;
        pageNum.innerText = page;
        LoadBooks(page - 1);
    }
})