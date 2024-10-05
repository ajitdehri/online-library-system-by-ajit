import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './store.css'
import Header from './Header';

const BrowseBooks = () => {
    const books = useSelector((state) => state.books.books);

    return (
        <>
        <Header/>
        <div  className='book-card1' >
            <div className='book-details1'>
                <ul className='addbook2'>
                    <div>
                    </div>
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <li className='addbook1' key={index}>
                                <h1 className='title3'><span>Title: </span>{book.title}</h1>
                                <h2 className='title4'><span>Author:</span>{book.author}</h2>
                                <h2 className='title4'><span>Category:</span>{book.category}</h2>
                            </li>

                        ))
                    ) : (
                        <h1>No books available</h1>
                    )}
                </ul>
            </div>

        </div>
        </>
    );
};

export default BrowseBooks;