import { combineReducers } from "redux";
import authorsReducer from "./features/Authors/authorSlice";
import booksReducer from "./features/books/booksSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;