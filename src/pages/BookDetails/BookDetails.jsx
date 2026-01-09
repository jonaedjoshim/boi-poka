import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import StraightLine from "../../component/StraightLine/StraightLine";
import { addStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const booksArray = Array.isArray(data) ? data : data?.books || [];
  const singleBook = booksArray.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return <p className="text-center text-red-500">Book not found</p>;
  }

  const {
    bookName,
    image,
    publisher,
    category,
    review,
    tags,
    author,
    totalPages,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addStoredDB(id);
  };

  return (
    <div className="hero lg:bg-base-200 min-h-fit rounded-lg shadow-2xl mt-6 lg:py-12 mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-4 lg:gap-16">
        <img
          src={image}
          alt={bookName}
          className="max-w-full lg:max-w-md mx-auto rounded-lg shadow-2xl bg-[#131313]"
        />
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <h3 className="font-medium text-xl">By : {author}</h3>
          <StraightLine />
          <h3 className="font-medium text-xl">{category}</h3>
          <StraightLine />
          <p>
            <strong>Review :</strong> {review}
          </p>
          <p>
            <strong>Tag :</strong> {tags}
          </p>
          <StraightLine />
          <p>Number of Pages: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p className="flex items-center gap-1">
            Rating: {rating} <FaStar />
          </p>
          <div className="space-x-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline border-white"
            >
              Mark as Read
            </button>
            <button className="btn bg-[#59C6D2] text-white border-none">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
