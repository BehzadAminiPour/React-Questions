import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  erroe: null,
  name: [],
};
const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    return {
      ...state,
      isLoading: true,
      name: action.payload,
    };
  }
};
export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      dispatch({ type: "GET_DATA", payload: response.data });
    });
  }, []);

  return (
    <div>
      {state.name.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
