import { useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);

  // async function getBooksByUserId(userId) {

  // }

  async function getAllBooks() {
    const response = await fetch("http://localhost:3001/book", {
      method: "get",
    });
    const data = await response.json();
    console.log();
    setBooks(await JSON.parse(data.body))
  }

  return (
    <div className="books">
      <button onClick={getAllBooks}>Get all books</button>
      {books.map( book => <div key={book.id}>
        <h2>{book.title}</h2>
        <p>{book.isbn}</p>
        <img src={book.imagePath} />
      </div> 
      )}
    </div>
  );
}
