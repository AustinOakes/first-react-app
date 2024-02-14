import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return <h2>My First Component</h2>
}

function Greeting2() {
    return React.createElement('h2', null, 'Hello World!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>)