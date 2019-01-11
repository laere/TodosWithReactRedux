import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoListReducer from './todoListReducer';


export default combineReducers({
  todos: todoListReducer,
  form: formReducer
});
