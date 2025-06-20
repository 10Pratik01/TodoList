import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <> 
      <div className="text-5xl text-center text-white font-bold mt-10 tracking-wide">
        Add Todo
      </div>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App