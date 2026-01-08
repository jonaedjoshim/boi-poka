import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookName, category, image, publisher, rating, tags, bookId } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-6 m-6 border border-[#13131390] rounded-2xl shadow-lg">
        <div>
          <figure className="bg-[#F3F3F3] rounded-2xl px-18 py-16 mb-5">
            <img src={image} alt="Book" className="h-72 mx-auto" />
          </figure>
        </div>
        <div>
          <div className="border-b border-dashed mb-5 pb-5 text-left space-y-5">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-soft badge-success text-[#23BE0A] px-4 py-3"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-base font-medium">By : {publisher}</p>
          </div>
          <div className="flex justify-between">
            <p>Category : {category}</p>
            <div className="flex items-center gap-2">
              Rating : {rating} <FaStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
