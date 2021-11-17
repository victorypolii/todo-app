import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div>
      <div class="d-inline p-2"><input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} /></div>
      
      <div class="d-inline p-2"> <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span></div>     
      
      <div class="d-inline p-2"><button class="btn btn-xs btn-danger img-circle" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>X</button></div>      
    </div>
  );
}

export default TodoItem;