import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[])
    // console.log(books)
    return (
        <div>
            <h2 className='text-4xl my-16 font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map(book=>{ return <Book key={book.bookId} book={book} ></Book>})
                }
            </div>
        </div>
    );
};

export default Books;