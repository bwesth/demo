import { useState } from "react";
import "./App.css";
import Books from "./Components/Books";
import BookUpload from "./Components/BookUpload";
import ImageUpload from "./Components/ImageUpload";
import RoomList from "./Components/RoomList";
import SignUp from "./Components/SignUp";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {user ? (
        <>
          <ImageUpload />
          <BookUpload />
          <Books books={user.books}/>
          <RoomList user={user} />
        </>
      ) : (
        <SignUp user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
