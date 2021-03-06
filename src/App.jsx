import React from 'react';
import { Container } from 'semantic-ui-react';
import MenuTop from './Containers/MenuContainer';
import BooksContainer from './Containers/BooksContainer';
import FilterContainer from './Containers/FilterContainer';

function App() {
  
  return (
    <Container>
      <MenuTop />
      <FilterContainer />
      <BooksContainer />
    </Container>
  );
};


export default App;
