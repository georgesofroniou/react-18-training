import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}
  
const Person = () => <h2>Welcome John Doe</h2>;
const Message = () => {
    return <p>This is my first component message with nested components.</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);