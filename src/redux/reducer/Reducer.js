import { ADD_TODO, DELETE_TODO } from "../action/action";

//data awal
const initialState = {
  data: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(state.data);
      return {
        data: [...state.data, action.payload],
      };
    case DELETE_TODO:
      const del_todo = state.data.filter((todo) => todo.id !== action.id);
      return {
        data: del_todo,
      };
    default:
      return state;
  }
}

export default Reducer;
