import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const [imagePath, setImagePath] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    });
    if (response) {
      const { statusText, body } = await response.json();
      setStatus(statusText);
      setImagePath(body.imagePath);
    }
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className="image-upload">
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
      <p>Image path: <a target="_blank" href={imagePath}>{imagePath}</a></p>
    </div>
  );
}