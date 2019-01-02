import { combineReducers } from 'redux';
// Reducers
const todoListReducer = (todoList = [], action) => {
  if (action.type === "ADD_TODO") {
    return [...todoList, action.payload];
  } else if (action.type === "DELETE_TODO") {
    return todoList.filter(id => id.id !== action.payload.id);
  }
  return todoList;
};

export default combineReducers({
  todos: todoListReducer
});
