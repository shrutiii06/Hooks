import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}
    function UseReducerPrac(){
        const [state, dispatch] = useReducer(reducer,{count:0})
        return(
        <div
            style={{ backgroundColor: "#000000", color: "#ffffff", padding: "20px" }}
        >
            <h2>
                Use Reducer Practical
            </h2>
            <p>Count : {state.count}</p>
            <button onClick={()=> dispatch({type : 'increment'})}>Increment</button>&nbsp; &nbsp;
            <button onClick={()=> dispatch({type : 'decrement'})}>Decrement</button>
        </div>
        )
    }
export default UseReducerPrac