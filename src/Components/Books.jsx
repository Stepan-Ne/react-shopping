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
    <Card.Group>
      {props.isReady
        ? props.books.map((i) => <BookCard key={i.id} {...i} />)
        : 'Loading ...'}
    </Card.Group>
  );
}

export default Books;
