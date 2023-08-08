import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = function(event){
    return setTitle(event.target.value);
  }

  const contentChangeHandler = function(event){
    return setContent(event.target.value);
  }

  const [todoList, setTodoList] = useState([
  ]);

  const [successTodoList, setSuccessTodoList] = useState([
  ]);

  const addTodoButton = function(){
    const newTodo = {
      id: todoList.length +1,
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
    const cancleTodo = successTodoList.find(todo => todo.id === id);
    if(cancleTodo){
      setTodoList([...todoList, cancleTodo]);
      deleteSuccessButton(id);
    }
  }

  return (
    <>
      <h3>My Todo List</h3>

      <div>
        제목 :<input type='text' 
                    value={title} 
                    onChange={titleChangeHandler}>
              </input>
        내용 :<input type='text'
                    value={content}
                    onChange={contentChangeHandler}>
              </input> <br />
        <button onClick={addTodoButton}>추가하기</button>
      </div>

      <div>
        <h4>Working!</h4>
        {
          todoList.map(function(todo){
            return  <div key={todo.id}>
                      {todo.id} - {todo.title} - {todo.content}<br />
                      <button onClick={() =>deleteTodoButton(todo.id)}>삭제하기</button>
                      <button onClick={() => completeTodoButton(todo.id)}>완료</button>
                    </div>
          })
          
        }
      </div>

      <div>
        <h4>Done!</h4>
        {
          successTodoList.map(function(successTodo){
            return <div key={successTodo.id}>
              {successTodo.id} - {successTodo.title} - {successTodo.content}
              <button onClick={() => deleteSuccessButton(successTodo.id)}>삭제하기</button>
              <button onClick={() => cancleTodoButton(successTodo.id)}>취소</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
