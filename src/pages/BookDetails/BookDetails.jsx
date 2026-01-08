import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import StraightLine from "../../component/StraightLine/StraightLine";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
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
  console.log(singleBook);
  return (
    <div className="hero lg:bg-base-200 min-h-fit rounded-lg shadow-2xl mt-6 lg:py-12 mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-4 lg:gap-16">
        <img src={image} className="max-w-full lg:max-w-md mx-auto rounded-lg shadow-2xl bg-[#131313}" />
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <h3 className="font-medium text-xl">By : {author}</h3>
          <StraightLine></StraightLine>
          <h3 className="font-medium text-xl">{category}</h3>
          <StraightLine></StraightLine>
          <p>
            <strong>Review :</strong> {review}
          </p>
          <p>
            <strong>Tag :</strong> {tags}
          </p>
          <StraightLine></StraightLine>
          <p>Number of Pages: {totalPages}</p>
          <p>Publisher:{publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p className="flex items-center gap-1">
            Rating: {rating} <FaStar />
          </p>
          <div className="space-x-4">
            <button className="btn btn-outline border-white">Read</button>
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
