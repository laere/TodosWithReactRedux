// Action Creators
export const addTodo = (text, id) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      id: id
    }
  }
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id: id
    }
  }
};
