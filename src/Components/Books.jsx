import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import BookCard from './BookCard';


function Books(props) {
  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((booksList) => props.setBooksList(booksList));
  }, []);

  return (
    <div>
      <Card.Group>
        {props.isReady
          ? props.books.map((i) => (
              <BookCard addBook={props.addBook} key={i.id} book={i} />
            ))
          : 'Loading ...'}
      </Card.Group>
    </div>
  );
}

export default Books;
