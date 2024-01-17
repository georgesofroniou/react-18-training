import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    img: './images/book1-atomic_habits-james_clear.jpg',
    alt: 'Atomic Habits',
    id: 1,
  },
  {
    author: 'Rick Rubin',
    title: 'The Creative Act: A Way of Being',
    img: './images/book2-the_creative_act-rick_rubin.jpg',
    alt: 'The Creative Act',
    id: 2,
  },
];


const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {

  const { img, title, author, alt, id } = props;
  console.log(props);

  return (
    <article className='book'>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <h5>ID: {id}</h5>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
