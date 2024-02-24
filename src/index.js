import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const Book = () => {
    const title = 'Atomic Habits';
    return <article className='book'>
        <Image/>
        <Title/>
        <Author/>
    </article>
}


const Image = () => <img src = "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg" alt='Atomic Habits'/>
const Title = () => <h2>Atomic Habits</h2>
const Author = () => {
    const inlineHeadingStyles = { color: '#617d98', foontSize: '0.75rem', marginTop: '0.5rem', };
    return <h4 style = {inlineHeadingStyles}>James Clear</h4>
}


// Start with props next


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)