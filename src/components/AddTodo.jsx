import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../function/todoSlice"

const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    
    const addTodoHandler = (e) => {
         e.preventDefault()
         if (input.trim()) {
             dispatch(addTodo(input))
             setInput("") // Clear input after adding todo
         }
    }

  return (
    <form onSubmit={addTodoHandler} className="lg:w-200 mx-auto flex items-center space-x-6 mt-12 p-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-2xl shadow-2xl">
      <input
        type="text"
        className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-100 py-2 px-6 w-full"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-600 border-0 py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
