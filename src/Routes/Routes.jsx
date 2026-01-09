import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/readList/readList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "readList",
        element: <ReadList />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "bookDetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);