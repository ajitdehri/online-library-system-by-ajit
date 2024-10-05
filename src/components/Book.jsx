// import React from 'react'
import './app.css'

function Book(props) {
    return (
        <>
            <div className='book-card'>
                <img src={props.booksDetails.cover_image} alt="img" width="200px" height="200px" className='book-cover' />

                <div className='book-details'>
                    <h3 className='titl'><span>Title:</span> {props.booksDetails.title}</h3>
                    <h4 className='autho'> <span>Author:</span> {props.booksDetails.author}</h4>

                    <button className='more-button'>More</button>
                </div>
            </div>
        </>
    )
}

export default Book
