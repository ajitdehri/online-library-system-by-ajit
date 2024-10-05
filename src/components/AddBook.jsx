import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import "./store.css"
import Header from './Header';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !author || !category) {
      setError(<h1>Please fill out all fields</h1>);
      return;
    }

    // Dispatch the action to add the book
    dispatch(addBook({ title, author, category }));

    // Redirect to Browse Books page
    navigate('/');
  };

  return (
    <>
<Header/>
    <div className='add-book-style'> 
     
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className='addbook-form'>
        <div className='addbook-input'>
          <label>Title:</label>
          <input
            type="text"
            
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
    </>
  );
};

export default AddBook;