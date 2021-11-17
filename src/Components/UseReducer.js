import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
} 

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.INCREMENT:
          return {count: state.count + 1};
        case ACTIONS.DECREMENT:
          return {count: state.count - 1};
        default:
         return state;
      }
}

function ExampleReducerHook(){
    const[state, dispatch]=useReducer(reducer, {count:0});    

    return(
        <div>
            <p>You clicked {state.count} times</p>

            <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
            <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
         </div>
    );
}
export default ExampleReducerHook;