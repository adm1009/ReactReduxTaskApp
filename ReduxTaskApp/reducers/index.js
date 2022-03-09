import { combineReducers } from "redux";
import toDoReducers from "./ToDoReducer";
const rootReducers = combineReducers({
    toDoReducers,
})
export default rootReducers;