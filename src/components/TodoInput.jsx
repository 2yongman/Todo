import React from 'react'

function TodoInput({ title, 
                    content, 
                    onTitleChange, 
                    onContentChange, 
                    onAddTodo }) {
  return (
    <div>
        제목 :<input type='text' 
                    value={title} 
                    onChange={onTitleChange}>
              </input>
        내용 :<input type='text'
                    value={content}
                    onChange={onContentChange}>
              </input> <br />
        <button onClick={onAddTodo}>추가하기</button>
      </div>
  )
}

export default TodoInput