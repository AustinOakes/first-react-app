// Start at 3:55:00 - Local Images (src folder)

import React from 'react';
import ReactDOM from 'react-dom/client';

// importing from files
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {

    return (
        <section className='booklist'>
            {books.map((book)=>{
                return(
                    <Book {...book} key={book.id}/>
                );
            })}
        </section>
    )
}

// Gets the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the Booklist component on the root element
root.render(<BookList/>)