import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([])

    return (
        <div className='text-center mt-10 lg:mt-25 mb-8'>
            <h1 className='text-3xl font-bold '>Books</h1>
            <Suspense fallback={<span>Wait a moment.... Data is in traffic jam...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;