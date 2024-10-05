import { useState } from 'react'
import BookList from './components/BookList'
import { Books } from './utilss/mockData'
import NoteFound from './components/NoteFound'



const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredBook, setfilteredBook] = useState(Books);


  function handleSearch() {
    const filteredBook = Books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));
    setfilteredBook(filteredBook);

  }


  return (
    <>


      <div className='header'>
        <div className='row1'>
          <h1 className='head'>YOU WANT WEAPONS ? WE ARE IN A <br /> LIBRARY! THE BEST WEAPONS IN THE WORLD!..</h1>

        </div>
        <div className='row2'>
          <h2>find your book</h2>
          <div className='search' >
            <input type="text" placeholder='Enter your book name' onChange={(e) => setSearchText(e.target.value)} required />
            <a href="#demo"><button onClick={handleSearch} >search</button>
            </a>


          </div>

        </div>
      </div>
      <div id='demo'>
        <div className='all-book'>
          <h1>All Books Collection</h1>
        </div>
        <BookList booksdata={filteredBook} />

      </div>
      <div>
        {filteredBook == 0 ? <NoteFound /> : ""}
      </div>
    </>
  )
}

export default App
