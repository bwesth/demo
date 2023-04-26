import { useState } from "react";
import { createRandomID } from "../utility";
import InputField from "./InputField";
import "./BookUpload.css"

export default function BookUpload() {
  const [status, setStatus] = useState("");
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [edition, setEdition] = useState("");
  const [authors, setAuthors] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [price, setPrice] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [language, setLanguage] = useState("");
  const [condition, setCondition] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let book = {
      isbn: isbn,
      title: title,
      edition: edition,
      authors: authors,
      publicationDate: publicationDate,
      purchaseDate: purchaseDate,
      originalPrice: originalPrice,
      price: price,
      imagePath: imagePath,
      language: language,
      condition: condition,
      ownerId: createRandomID("user"),
    };
    console.log(book);
    const response = await fetch("http://localhost:3001/book", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(book),
    });
    if (response) {
      const { statusText } = response;
      setStatus(statusText);
    }
  }

  return (
    <div className="book-upload">
      <h1>Submit book to server</h1>
      <form className="form" onSubmit={handleSubmit}>
        <InputField name="isbn" value={isbn} setValue={setIsbn} />
        <InputField name="title" value={title} setValue={setTitle} />
        <InputField name="edition" value={edition} setValue={setEdition} />
        <InputField name="authors" value={authors} setValue={setAuthors} />
        <InputField
          name="publication date"
          value={publicationDate}
          setValue={setPublicationDate}
        />
        <InputField
          name="print date"
          value={purchaseDate}
          setValue={setPurchaseDate}
        />
        <InputField
          name="original price"
          value={originalPrice}
          setValue={setOriginalPrice}
        />
        <InputField name="price" value={price} setValue={setPrice} />
        <InputField
          name="image path"
          value={imagePath}
          setValue={setImagePath}
        />
        <InputField name="language" value={language} setValue={setLanguage} />
        <InputField
          name="condition"
          value={condition}
          setValue={setCondition}
        />
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
}
