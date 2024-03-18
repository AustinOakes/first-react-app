const Book = (props) => {
    console.log(props);
    const { img, title, author, getBook, id } = props;

    return <article className='book'>
        <img 
            src = {img} 
            alt = {title}
        />
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
}

export default Book;