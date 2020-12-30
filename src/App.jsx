import React from 'react';
import { Container } from 'semantic-ui-react';
import MenuTop from './Components/MenuTop';
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
