export const addBookAC = (book) => ({
type: 'ADD_BOOK',
payload: book
});
export const removeBook = (id) => ({
    type: 'REMOVE_BOOK',
    payload: id
});