const initialState = {
    books: null,
    isReady: false,
    filterBy: 'all'
}

export default (state = initialState, action) => {
switch (action.type) {
    case `SET_BOOKS`: // from server
        return {
            ...state,
            books: action.payload,
            isReady: true
        };
    case `SET_IS_READY`: // from server
        return {
            ...state,
            isReady: action.payload
        };
        case `FILTER_BY`:
        return {
            ...state,
            filterBy: action.payload
        };

    default:
        return state;

}
}