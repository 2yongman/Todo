import React from 'react'

function SuccessTodoItem({ successTodo, onDelete, onCancel }) {
  return (
    <div>
      {successTodo.id} - {successTodo.title} - {successTodo.content}<br />
      <button onClick={() => onDelete(successTodo.id)}>삭제하기</button>
      <button onClick={() => onCancel(successTodo.id)}>취소</button>
    </div>
  );
}

export default SuccessTodoItem