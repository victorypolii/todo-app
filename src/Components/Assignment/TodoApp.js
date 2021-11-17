import React, {useState, useReducer} from 'react';
// import Todo from './TodoAppItem';
// import { Button } from 'reactstrap';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }   

  function TodoItem({todo, dispatch}) {
    return(
      <div className="row border-bottom bg-light">
        <div className="col-1 m-2 p-0"><button className="btn btn-sm btn-xs btn-success img-circle " onClick={() => dispatch({ type: 'flip', payload: {id : todo.id}})}>&#x2713;</button></div>
        
        <div className="col m-2"> <span className="fs-5" style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span></div>   
        
        <div className="col-1 justify-content-end m-2 p-0"><button className="btn btn-sm btn-xs btn-danger img-circle " onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>&#xff38;</button></div>      
      </div>
    );
  }

  return(
    <div className="container p-4 mt-3 bg-primary bg-opacity-10">
        <div><h1>To Do List Today...</h1></div>     

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }

      <hr/>

      <form onSubmit={handleSubmit}>
        <div className="col-md-10 w-100">
        <input className="w-100 " type="text" placeholder="What do you need to do?" value={text} onChange={(event) => setText(event.target.value)} />
        </div>
        <br/>
        <div className="col-md-10 w-100">
        <button className="btn btn-xs btn-primary w-100" type="Submit">Add</button>
        </div>        
      </form>      
    </div>
  );
}

export default Todos;