import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList() {
    return (
        <section className='book-list'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones';
    const author = 'James Clear';

    return (
        <article className='book'>
            <img src='./images/book1-atomic_habits-james_clear.jpg' alt='Atomic Habits'/>
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
};
  
// const Book = () => {
//     return <article className='book'>
//         <Image />
//         <Title />
//         <Author />
//     </article>
// };

// const Image = () => <img src="./images/book1-atomic_habits-james_clear.jpg" alt="Atomic Habits"/>;
// const Title = () => <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>;
// const Author = () => {
//     return <h4>James Clear</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);