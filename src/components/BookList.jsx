// import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import './app.css'


function BookList(props) {
    // console.log("props", props)
    return (
        <>
            <div className='bookList'>
                {
                    props.booksdata.map((book) => (
                        <Link to={`/book/${book.id}`}><Book booksDetails={book}></Book></Link>
                    ))

                }

            </div>
        </>

    );
}

export default BookList
