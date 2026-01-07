import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse  lg:py-30">
                <img className='rounded-xl' src={bookImg} alt="Books" />
                <div className='space-y-12'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white border-none">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
