import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="text-center mt-10 lg:mt-25 mb-8">
      <h1 className="text-3xl font-bold">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(data) &&
          data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
      </div>
    </div>
  );
};

export default Books;
