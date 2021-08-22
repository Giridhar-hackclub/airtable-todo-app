import React, { useContext } from 'react'
import { TodosContext } from '../context/todos'

const Todo = ({ todo }) => {
	// for updating and deleting todo
	const { updateTodo, deleteTodo } = useContext(TodosContext)

	// Update the record when the checkbox is checked
	const handleCompleted = () => {
		const updatedFields = {
			...todo.fields,
			completed: !todo.fields.completed,
		}
		const updatedTodo = { id: todo.id, fields: updatedFields }
		updateTodo(updatedTodo)
	}
	
	return (
		<li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
			<input
				type="checkbox"
				name="completed"
				id="completed"
				checked={todo.fields.completed}
				className="mr-2 form-chechbox h-5 w-5"
				onChange={handleCompleted}
			/>
			<p
				className={`flex-1 text-gray-800 ${
					todo.fields.completed ? 'line-through' : ''
				}`}>
				{todo.fields.description}
			</p>
			{/* delete todo when the delete button is clicked*/}
			<button
				type="button"
				className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
				onClick={() => deleteTodo(todo.id)}>
				Delete
			</button>
		</li>
	)
}

export default Todo
