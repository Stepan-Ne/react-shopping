import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Container } from 'semantic-ui-react';

import {setBooksAC} from './actions/booksAC';
import MenuTop from "./Components/MenuTop";




function App(props) {

    //const {books} = props.books;
    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(booksList => props.setBooksList(booksList))
    }, [])


    return (
        <Container>
            <div>
                <MenuTop />
            </div>
            <div className="Container">
                <ul>
                    {
                        props.isReady
                            ? props.books.map(i => <li key={i.id}>{i.title}. {i.author}</li>)
                            : 'Loading ...'
                    }
                </ul>
            </div>
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
