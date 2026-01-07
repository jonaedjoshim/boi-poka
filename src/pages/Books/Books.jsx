import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })
    }, [])

    return (
        <div className='text-center mt-10 lg:mt-25 mb-8'>
            <h1 className='text-3xl font-bold '>Books</h1>
        </div>
    );
};

export default Books;