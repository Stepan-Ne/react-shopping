import React from 'react';
import { Container } from 'semantic-ui-react';
import MenuTop from './Components/MenuTop';
import BooksContainer from './Containers/BooksContainer';
import Filter from './Components/Filter';

function App() {
  
  return (
    <Container>
      <MenuTop />
      <Filter />
      <BooksContainer />
    </Container>
  );
};


export default App;
