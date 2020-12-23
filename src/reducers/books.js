const initialState = {
    books: []
}

export default (state = initialState, action) => {
switch (action.type) {
    case `SET_BOOKS`: // from server
        return {
            books: action.payload
        };
    case `ADD_BOOKS`:
        return {
            books: [
                ...state.books,
                action.payload
            ]
        };
    default:
        return state;

}
}