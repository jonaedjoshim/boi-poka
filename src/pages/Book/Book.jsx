import React from 'react';

const Book = ({ singleBook }) => {
    console.log(singleBook)
    const { author, bookName, category, image, publisher, rating, review } = singleBook

    return (
        <div></div>
         
    );
};

export default Book;


//<div className=" bg-base-100 shadow-sm p-6 grid gap-6 border">
//     <div className='mb-8'>
//         <figure className='bg-[#F3F3F3] rounded-2xl px-20 py-16 mb-5'>
//             <img src={image} alt="Book" className='h-96 mx-auto' />
//         </figure>
//         <div className="">
//             <div className='flex flex-col items-start gap-4 border-b border-dashed mb-5 pb-5'>
//                 <div className='space-x-3'>
//                     <div className="badge badge-soft badge-success text-[#23BE0A] px-4 py-2">adult</div>
//                     <div className="badge badge-soft badge-success text-[#23BE0A] px-4 py-2">identity</div>
//                 </div>
//                 <h2 className='text-2xl font-bold'>{bookName}</h2>
//                 <p className='text-base font-medium'>By : {publisher}</p>
//             </div>
//             <div className='w-full flex justify-between text-base font-medium'>
//                 <p>Category : {category}</p>
//                 <div>Rating : {rating}</div>
//             </div>
//         </div>
//     </div>
// </div>