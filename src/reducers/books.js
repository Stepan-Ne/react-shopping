const initialState = {
    books: [{
        id: 1,
        title: 'Bible'
    }],
    ids: []
}

export default (state = initialState, action) => {
switch (action.type) {
    case `SET_BOOKS`: // from server
        return {
            ...state,
            books: action.payload
        };
    case `ADD_BOOKS`:
        return {
            ...state,
            books: [
                ...state.books,
                action.payload
            ]
        };
    default:
        return state;

}
}