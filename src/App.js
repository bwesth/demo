import "./App.css";
import Books from "./Components/Books";
import BookUpload from "./Components/BookUpload";
import ImageUpload from "./Components/ImageUpload";

function App() {
  

  return (
    <div className="App">
      <ImageUpload />
      <BookUpload />
      <Books />
    </div>
  );
}

export default App;
