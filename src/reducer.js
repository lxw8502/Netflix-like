import { INIT, ADD, REMOVE } from "./actionTypes";

export default function reducer(
  state = { mylist: [], recommendations: [] },
  action
) {
  let mylist = [];
  let recommendations = [];
  switch (action.type) {
    case INIT:
      return action.payload;
    case ADD:
      const addItem = state.recommendations.filter((item) => {
        return item.id === action.payload;
      });
      mylist = [...state.mylist, ...addItem];
      console.log("add ");
      recommendations = state.recommendations.filter((item) => {
        return item.id !== action.payload;
      });
      return { mylist, recommendations };
    case REMOVE:
      const removeItem = state.mylist.filter((item) => {
        return item.id === action.payload;
      });
      recommendations = [...state.recommendations, ...removeItem];
      mylist = state.mylist.filter((item) => {
        return item.id !== action.payload;
      });
      console.log("remove ");
      return { mylist, recommendations };
    default:
      return state;
  }
}
