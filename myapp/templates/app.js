// Update this URL with your EC2 instance's public IP
const apiBaseUrl = "http://13.233.155.213:5000/api/books";

document.getElementById("addBookForm").addEventListener("submit", addBook);
window.onload = fetchBooks;

function fetchBooks() {
  fetch(apiBaseUrl)
    .then((response) => response.json())
    .then((books) => {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";
      books.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Price: $${book.price}`;
        bookList.appendChild(li);
      });
    });
}

function addBook(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const price = document.getElementById("price").value;

  const newBook = {
    title: title,
    author: author,
    isbn: isbn,
    price: price,
  };

  fetch(apiBaseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  })
    .then((response) => response.json())
    .then(() => fetchBooks())
    .catch((err) => console.error("Error:", err));
}
