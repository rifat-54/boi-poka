import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    tags,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
  } = book;
  return (
   <Link to={`/books/${bookId}`}> <div className="card border border-gray-200 p-6 bg-base-100 shadow-xl">
   <figure className="bg-[#F3F3F3] py-6 rounded-xl">
     <img className="h-[166px] w-[134px]" src={image} alt="Shoes" />
   </figure>
   <div className="card-body">
     <div className="flex justify-between">
       {tags.map((tag,idx) => (
         <button key={idx} className="btn text-green-600 bg-green-200">{tag}</button>
       ))}
     </div>
     <h2 className="card-title text-3xl mt-5">{bookName}</h2>
     <p>By : {author}</p>
     <div className="border mt-2 mb-4 border-t border-dashed"></div>

     <div className="card-actions justify-between items-center">
       <div className="badge bg-green-500 text-white px-6 py-4 badge-outline">
         {category}
       </div>
       <div className="rating">
         <input
           type="radio"
           name="rating-4"
           className="mask mask-star-2 bg-green-500"
         />
         <input
           type="radio"
           name="rating-4"
           className="mask mask-star-2 bg-green-500"
           defaultChecked
         />
         <input
           type="radio"
           name="rating-4"
           className="mask mask-star-2 bg-green-500"
         />
         <input
           type="radio"
           name="rating-4"
           className="mask mask-star-2 bg-green-500"
         />
         <input
           type="radio"
           name="rating-4"
           className="mask mask-star-2 bg-gray-500"
         />
       </div>
     </div>
   </div>
 </div></Link>
  );
};

export default Book;
