import React from 'react';
import {connect} from "react-redux";
import {addNewBookAC} from './actions/booksAC';


// books: [{
//     id: 12,
//     title: 'Anna Karenina'
// }]
function App(props) {

    const {books} = props.books;
    const newBook = {
        title: 'Lolo: ' + new Date()
    }

    const setNewBook = () => {
        props.setNewBook(newBook)
        console.log(newBook);
    }

    return (
        <div className="Container">
            {
                books.map(b => <h3 key={Math.random()}>{b.title}</h3>)
            }

            <button onClick={setNewBook}>Click</button>
        </div>
    );
}

const mapState = (state) => ({
    books: state.allBooks
})
const mapDispatch = (dispatch) => {
    return {
        setNewBook: (newBook) => dispatch(addNewBookAC(newBook))
    }
}
export default connect(mapState, mapDispatch)(App);
