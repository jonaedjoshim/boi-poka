import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(singleBook);
  const { bookName, category, image, author, rating, tags, bookId } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-6 m-6 border border-[#13131390] rounded-2xl hover:shadow-2xl">
        <div>
          <figure className="bg-[#F3F3F3] rounded-2xl mb-5">
            <div className="py-5 md:py-7 lg:py-8 bg-[#F3F3F3] w-7/12 md:w-9/12 lg:w-11/12 shadow-xl mx-auto">
              <img src={image} alt="Book" className="flex h-72 mx-auto" />
            </div>
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
            <p className="text-base font-medium">By : {author}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center lg:justify-between">
            <p className="min-w-fit">Category : {category}</p>
            <div className="flex min-w-fit items-center gap-2">
              Rating : {rating} <FaStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
