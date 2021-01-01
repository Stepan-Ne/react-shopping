import { connect } from 'react-redux';
import { setBooksAC } from '../actions/booksAC';
import Books from '../Components/Books';
import orderBy from 'lodash/orderBy';
import { addBookAC } from '../actions/cartAC';

const sortBy = (allBooks, type, query) => {
    
    // 1. query was set
  if (allBooks && query) {
// let`s filtering all books with query: title or author
    const queryBooks = allBooks.filter(
      (b) => b.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||  b.author.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    // return query books, if they are, with sort
    return foo(queryBooks.length > 0 ? queryBooks : allBooks, type);

  } else { // 2. query wasn`t set
      return foo(allBooks, type);
  }
// sort function
  function foo(books, param) {
      
    switch (param) {
      case 'all':
        return books;
      case 'price_high':
        return orderBy(books, 'price', 'desc');
      case 'price_low':
        return orderBy(books, 'price', 'asc');
      case 'author':
        return orderBy(books, 'author', 'asc');

      default:
        return books;
    }
  }
};

const mapState = (state) => ({
  books: sortBy(
    state.allBooks.books,
    state.filterReducer.filterBy,
    state.filterReducer.searchQuery
  ),
  isReady: state.allBooks.isReady,
  countAddedBook: state.cartReducer.booksInCart
});
const mapDispatch = (dispatch) => {
  return {
    setBooksList: (booksList) => dispatch(setBooksAC(booksList)),
    addBook: (book) => dispatch(addBookAC(book))
  };
};
export default connect(mapState, mapDispatch)(Books);
