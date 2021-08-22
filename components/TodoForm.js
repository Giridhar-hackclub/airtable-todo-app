import React, { useState, useContext } from 'react'
import { TodosContext } from '../context/todos'

const Form = () => {
	const [todo, setTodo] = useState('')
	const { addTodo } = useContext(TodosContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(todo)
		setTodo('')
	}

	return (
		<form className="form my-8" onSubmit={handleSubmit}>
			<div className="flex justify-between w-full">
				<input
					type="text"
					name="todo"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					placeholder="ex. Learn Next.js"
					className="flex-1 border border-gray-200 p-2 mr-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
				/>
				<button
					type="submit"
					className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
					+ Add Todo
				</button>
			</div>
		</form>
	)
}

export default Form
