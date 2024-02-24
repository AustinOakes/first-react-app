import React from 'react';
import ReactDOM from 'react-dom/client';

// importing css
import './index.css';

const firstBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'
}

const secondBook = {
    author: 'Tony Robbins',
    title: 'The Holy Grail of Investing',
    img: 'https://m.media-amazon.com/images/I/71zQ-0+fV7L.jpg'
}

const author = 'James Clear';
const title = 'Atomic Habits';
const img = 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'

const BookList = () => {
    return (
        <section className='booklist'>
            <Book author = {firstBook.author} title = {firstBook.title} img={firstBook.img}/>
            <Book author = {secondBook.author} title = {secondBook.title} img={secondBook.img}/>
        </section>
    )
}

const Book = (props) => {
    console.log(props);
    return <article className='book'>
        <img 
            src = {props.img} 
            alt = {props.title}
        />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
}

//Start with child props next


// Gets the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the Booklist component on the root element
root.render(<BookList/>)