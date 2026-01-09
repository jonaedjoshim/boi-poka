import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";

const readList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <Tabs>
      <TabList>
        <Tab>My Read List</Tab>
        <Tab>My Wishlst</Tab>
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
  );
};

export default readList;
