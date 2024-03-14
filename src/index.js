import React from 'react';
import ReactDOM from 'react-dom/client';

// importing css
import './index.css';

const books = [
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
        id: 1
    },
    {
        author: 'Tony Robbins',
        title: 'The Holy Grail of Investing',
        img: 'https://m.media-amazon.com/images/I/71zQ-0+fV7L.jpg',
        id: 2
    }
];

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

const Book = (props) => {
    console.log(props);
    const { img, title, author } = props;
    return <article className='book'>
        <img 
            src = {img} 
            alt = {title}
        />
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}

//Start with Events section next


// Gets the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the Booklist component on the root element
root.render(<BookList/>)