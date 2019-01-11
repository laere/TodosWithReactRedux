import _ from 'lodash';
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  EDIT_TODO,
  COMPLETE_TODO
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type){
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case COMPLETE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
