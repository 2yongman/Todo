import React from 'react';
import TodoItem from './TodoItem';
import SuccessTodoItem from './SuccessTodoItem';

function TodoList({ todoList, successTodoList, onDeleteTodo, onCompleteTodo, onCancelTodo }) {
  return (
    <div>
      <h4>Working!</h4>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onComplete={onCompleteTodo}
        />
      ))}
      <h4>Done!</h4>
      {successTodoList.map(successTodo => (
        <SuccessTodoItem
          key={successTodo.id}
          successTodo={successTodo}
          onDelete={onDeleteTodo}
          onCancel={onCancelTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;