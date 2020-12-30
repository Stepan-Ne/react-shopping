import {connect} from "react-redux";
import {setBooksAC} from '../actions/booksAC';
import Books from '../Components/Books';




const mapState = (state) => ({
    books: state.allBooks.books,
    isReady: state.allBooks.isReady
})
const mapDispatch = (dispatch) => {
    return {
        setBooksList: (booksList) => dispatch(setBooksAC(booksList))
    }
}
export default connect(mapState, mapDispatch)(Books);
