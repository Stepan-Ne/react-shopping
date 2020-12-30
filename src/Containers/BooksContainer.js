import {connect} from "react-redux";
import {setBooksAC} from '../actions/booksAC';
import Books from '../Components/Books';
import orderBy from 'lodash/orderBy';
 
const sortBy = (books, type) => {
switch (type) {
    case 'all':
        return books;
    case 'price_high':
        return orderBy(books, 'price', 'desc');
    case 'price_low':
        return orderBy(books, 'price', 'asc');
    case 'author':
        return orderBy(books, 'author', 'asc')

    default:
        return books;
}
};

const mapState = (state) => ({
    books: sortBy(state.allBooks.books, state.allBooks.filterBy),
    isReady: state.allBooks.isReady
})
const mapDispatch = (dispatch) => {
    return {
        setBooksList: (booksList) => dispatch(setBooksAC(booksList))
    }
}
export default connect(mapState, mapDispatch)(Books);
