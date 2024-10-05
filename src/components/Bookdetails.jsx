import './bookdetails.css'
import { useParams } from 'react-router-dom';
import { Books } from '../utilss/mockData';
import Header from './Header';

const Bookdetails = () => {
    const params = useParams();
    // console.log(params);
    const book = Books.filter((book) => book.id == params.id);
    // console.log(book);
    return (
        <>
            {/* <h1>{`book id ${params.id}`}</h1> */}
            {book.map((book) => {
                return (
                    <>
                    <Header/>
                        <div className='book-card' id="book-card1">
                            <img src={book.cover_image} alt="img" width="200px" height="200px" className='book-cover' />

                            <div className='book-details'>
                                <h3 className='title'> {book.title}</h3>
                                <h4 className='author'><span>Author</span>: {book.author}</h4>

                                <h4 className='author'><span>Publication_year</span>: {book.publication_year}</h4>
                                <p className='desc'><span>Description</span>: {book.description}</p>
                            </div>
                        </div>
                    </>


                );


            })}


        </>
    )
}

export default Bookdetails
