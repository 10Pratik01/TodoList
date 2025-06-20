import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../function/todoClice";

const Todo = () => {
  const [update, setUpdate] = useState("");
  const [active, setActive] = useState(false);
  const [id, setId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && update) {
      dispatch(updateTodo({ id, text: update }));
      setUpdate(""); // Clear input after submit
      setActive(false); // Hide the input form
    }
  };

  return (
    <>
      <div className="text-3xl text-center text-white font-bold mt-10 tracking-wide">
        Your Todos
      </div>
      <ul className="list-none mt-8 space-y-6 max-w-9xl mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex-1">{todo.text}</div>
            <div className="flex gap-4">
              {/* Update */}
              <div>
                <div
                  className={`${
                    active ? "" : "hidden"
                  } flex gap-4 bg-gray-600 p-2 rounded-md`}
                >
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                      value={update}
                      onChange={(e) => setUpdate(e.target.value)}
                      type="text"
                      className="ring-0 h-full w-full text-white font-semibold bg-transparent border-b-2 border-gray-500 focus:ring-indigo-300 focus:border-indigo-500"
                      placeholder="Write the updated text"
                    />
                    <button
                      type="submit"
                      className="text-white bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <button
                  onClick={() => {
                    setActive(true);
                    setId(todo.id);
                    setUpdate(todo.text); // Pre-populate the input with the current todo text
                  }}
                  className={`${
                    active ? "hidden" : ""
                  } text-white bg-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-700 transition-all duration-200`}
                >
                  Update
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
