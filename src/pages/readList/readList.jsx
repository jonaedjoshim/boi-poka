import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [Sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
  };

  return (
    <div className="mt-6">
      <div className="font-bold text-3xl bg-[#131313] rounded-2xl py-4 flex justify-center">
        <h1>Books</h1>
      </div>
      <button
        className="btn flex items-center justify-around font-semibold bg-[#23BE0A] mx-auto my-8"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        Sort By {Sort ? `: ${Sort}` : <IoIosArrowDropdown className="text-base mt-1 " />}
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <a onClick={() => handleSort("pages")}>Pages</a>
        </li>
        <li>
          <a onClick={() => handleSort("ratings")}>Ratings</a>
        </li>
      </ul>

      <Tabs>
        <TabList>
          <Tab>My Read List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>
        <TabPanel>
          <h2>read list books {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book) => (
              <Book key={book.bookId} singleBook={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>wish list books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;