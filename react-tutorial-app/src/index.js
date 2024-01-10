import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones';
const alt = 'Atomic Habits';
const author = 'James Clear';
const img = './images/book1-atomic_habits-james_clear.jpg';

function BookList() {
    return (
        <section className='book-list'>
            <Book author={author} title={title} img={img} alt={alt} />
            <Book author={author} title={title} img={img} />
            <Book author={author} title={title} img={img} />
            <Book author={author} title={title} img={img} />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h4>{props.author} </h4>
        </article>
    );
};

// const Book = () => {
    
//     return (
//         <article className='book'>
//             <img src={img} alt={alt}/>
//             <h2>{title}</h2>
//             <h4>{author.toUpperCase()}</h4>
//         </article>
//     );

// };
  
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