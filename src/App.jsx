import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [successTodoList, setSuccessTodoList] = useState([]);

  const titleChangeHandler = function(event){
    setTitle(event.target.value);
  }

  const contentChangeHandler = function(event){
    setContent(event.target.value);
  }

  const addTodoButton = function(){
    const newTodo = {
      id: todoList.length + 1,
      title: title,
      content: content,
    }
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteTodoButton = function(id){
    const updateTodo = todoList.filter(function(todo){
      return todo.id !== id;
    });
    setTodoList(updateTodo);
  };

  const deleteSuccessButton = function(id){
    const updateSuccessTodo = successTodoList.filter(function(todo){
      return todo.id !== id;
    });
    setSuccessTodoList(updateSuccessTodo);
  };

  const completeTodoButton = function(id){
    const completeTodo = todoList.find(todo => todo.id === id);
    if(completeTodo){
      setSuccessTodoList([...successTodoList, completeTodo]);
      deleteTodoButton(id);
    }
  };

  const cancleTodoButton = function(id){
    const cancelTodo = successTodoList.find(todo => todo.id === id);
    if(cancelTodo){
      setTodoList([...todoList, cancelTodo]);
      deleteSuccessButton(id);
    }
  }

  return (
    <>
      <h3>My Todo List</h3>
      <TodoInput
        title={title}
        content={content}
        onTitleChange={titleChangeHandler}
        onContentChange={contentChangeHandler}
        onAddTodo={addTodoButton}
      />
      <TodoList
        todoList={todoList}
        successTodoList={successTodoList}
        onDeleteTodo={deleteTodoButton}
        onCompleteTodo={completeTodoButton}
        onCancelTodo={cancleTodoButton}
      />
    </>
  );
}

export default App;