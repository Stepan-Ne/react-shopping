import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { Container, Card } from 'semantic-ui-react';


import {setBooksAC} from './actions/booksAC';
import MenuTop from "./Components/MenuTop";
import BookCard from "./Components/BookCard";




function App(props) {

    //const {books} = props.books;
    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(booksList => props.setBooksList(booksList))
    }, [])


    return (
        <Container>

                <MenuTop />


                <Card.Group>
                    {
                        props.isReady
                            ? props.books.map(i => <BookCard  key={i.id} {...i} />)
                            : 'Loading ...'
                    }
                </Card.Group>

        </Container>

    );
}

const mapState = (state) => ({
    books: state.allBooks.books,
    isReady: state.allBooks.isReady
})
const mapDispatch = (dispatch) => {
    return {
        setBooksList: (booksList) => dispatch(setBooksAC(booksList))
    }
}
export default connect(mapState, mapDispatch)(App);
