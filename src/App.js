import React from 'react';
import {connect} from "react-redux";


function App({books, ...props}) {

  return (
    <div className="Container">
        {books.books[0].title}
    </div>
  );
}

const mapState = (state) => ({
    books: state.allBooks
})
export default connect(mapState, null)(App);
