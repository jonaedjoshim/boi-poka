import React from 'react';

const Book = ({ singleBook }) => {
    console.log(singleBook)
    const { author, bookName, category, image, publisher, rating, review } = singleBook

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='mb-8'>
                <figure className='bg-[#F3F3F3] rounded-2xl px-20 py-16'>
                    <img src={image} alt="Book" className='h-96' />
                </figure>
                <div className="">
                    <div className='flex flex-col items-start'>
                        <div className='space-x-3'>
                            <div className="badge badge-soft badge-success text-[#23BE0A] px-4 py-2">adult</div>
                            <div className="badge badge-soft badge-success text-[#23BE0A] px-4 py-2">identity</div>
                        </div>
                        <h2 className='text-2xl font-bold'>{bookName}</h2>
                        <p className='text-base font-medium'>By : {publisher}</p>
                    </div>
                    <div className='w-full border'>
                        <p>{category}</p>
                        <div>{rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;



{/* <h2 className="card-title flex flex-col">
    <div className="badge badge-soft badge-success">NEW</div>
    <h3>{bookName}</h3>
</h2> */}