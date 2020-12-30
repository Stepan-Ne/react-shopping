import React from 'react';
import { Container } from 'semantic-ui-react';
import MenuTop from './Components/MenuTop';
import BooksContainer from './Containers/BooksContainer';

function App() {
  
  return (
    <Container>
      <MenuTop />
      <BooksContainer />
    </Container>
  );
};


export default App;
