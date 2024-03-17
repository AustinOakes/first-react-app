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
    const someValue = 'shakeandbake';
    const displayValue = () => {
        console.log(someValue);
    }
    return (
        <section className='booklist'>
            {/* <EventExamples/> */}
            {books.map((book)=>{
                return(
                    <Book {...book} key={book.id} displayValue={displayValue}/>
                );
            })}
        </section>
    )
}


// const EventExamples = () => {
//     const handleFormInput = (e) => {
//         console.log(e.target);
//         console.log(e.target.name);
//         console.log(e.target.value);
//     };
//     const handleButtonClick = (e) => {
//         alert('handle button click');
//     };
//     const handleFormSubmission = (e) => {
//         e.preventDefault();
//         console.log('form submitted')
//     };
//     return <section>
//         <form onSubmit={handleFormSubmission}>
//             <h2>Typical Form</h2>
//             <input type='text' name='example' onChange={handleFormInput} style={{margin: '1rem 0'}}/>
//         </form>
//         <button onClick={handleButtonClick}>Click me</button>
//     </section>
// }


const Book = (props) => {
    console.log(props);
    const { img, title, author, displayValue } = props;

    // const displayTitle = () => {
    //     console.log(title);
    // };

    return <article className='book'>
        <img 
            src = {img} 
            alt = {title}
        />
        <h2>{title}</h2>
        <button onClick={displayValue}>Click Me</button>
        <h4>{author}</h4>
    </article>
}

// Start again at 3:35:57 - This should be some sort of challenge


// Gets the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the Booklist component on the root element
root.render(<BookList/>)