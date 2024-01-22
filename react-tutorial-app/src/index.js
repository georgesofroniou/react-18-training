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
  const someValue = 'shakeAndBake';

  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}



const Book = (props) => {

  const { img, title, author, alt, id, displayValue } = props;
  // console.log(props);

  return (
    <article className='book'>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click Me</button>
      <h4>{author} </h4>
      <h5>ID: {id}</h5>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);



/* Events commented out
const EventExamples = () => {

  const handleFormInput = (e) => {
    console.log(e);
    console.log('handle form input');
    console.log(`Input Name : ${e.target}`);
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    console.log(`Input Type : ${e.target.type}`);
  };

  const handleButtonClick = () => {
    alert('handle button click');
  };
  
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name='example'
          onChange={handleFormInput}
          style={{margin: '1rem 0'}} 
        />
        <button type="submit">Submit Form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>  
    </section>
  );
};

*/