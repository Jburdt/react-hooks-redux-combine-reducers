import React from "react";
import AuthorInput from "./features/Authors/AuthorInput";
import Authors from "./features/Authors/Authors";
import BookInput from "./features/books/BookInput";
import Books from "./features/books/Books";


function App() {
 
  return (
    <div>
      <div>
        <h2>Authors</h2>
        <AuthorInput />
        <Authors />
      </div>
      <div>
        <h2>Book</h2>
        <BookInput />
        <Books />
      </div>
    </div>
  );
}

export default App;
