import React from 'react'

function TodoItem({ todo, onDelete, onComplete }) {
  return (
    <div>
      {todo.id} - {todo.title} - {todo.content}<br />
      <button onClick={() => onDelete(todo.id)}>삭제하기</button>
      <button onClick={() => onComplete(todo.id)}>완료</button>
    </div>
  );
}

export default TodoItem