import todos from '../apis/todos';
import history from '../history';
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from './types';

// Action Creators

export const fetchTodos = () => async dispatch => {
  const response = await todos.get('/todos');

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
}

export const fetchTodo = (id) => async dispatch => {
  const response = await todos.get(`/todos/${id}`);

  dispatch({
    type: FETCH_TODO,
    payload: response.data
  });
}

export const addTodo = formValues => async dispatch => {
  const response = await todos.post('/todos', { ...formValues, completed: false });

  dispatch({
    type: ADD_TODO,
    payload: response.data
  });
  history.push('/');
};

export const deleteTodo = (id) => async dispatch => {
  await todos.delete(`/todos/${id}`);

  dispatch({
    type: DELETE_TODO,
    payload: id
  });

  history.push('/');
};

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todos.patch(`/todos/${id}`, formValues);

  dispatch({
    type: EDIT_TODO,
    payload: response.data
  });

  history.push('/');
};

export const completeTodo = id => async dispatch => {
  const response = await todos.patch(`/todos/${id}`);

  dispatch({
    type: COMPLETE_TODO,
    payload: id
  });
}
