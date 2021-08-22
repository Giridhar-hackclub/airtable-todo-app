import { createContext, useState } from 'react'

const TodosContext = createContext()

const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState()

	// for creating a todo
	const addTodo = async (description) => {
		try {
			// we will send a POST request with the data required to create an tododuction
			const res = await fetch('/api/createTodo', {
				method: 'POST',
				body: JSON.stringify({ description }),
				headers: { 'Content-Type': 'application/json' },
			})
			const newTodo = await res.json()
			// then we will update the 'todos' adding the newly added intoduction
			setTodos((prevTodos) => [newTodo, ...prevTodos])
		} catch (error) {
			console.error(error)
		}
	}

	// for updating an existing todo
	const updateTodo = async (updatedTodo) => {
		try {
			// we will send a PUT request with the updated information
			const res = await fetch('/api/updateTodo', {
				method: 'PUT',
				body: JSON.stringify(updatedTodo),
				headers: { 'Content-Type': 'application/json' },
			})
			await res.json()
			// then we will update the 'todos' by replacing the fields of existing todo.
			setTodos((prevTodos) => {
				const existingTodos = [...prevTodos]
				const existingTodo = existingTodos.find(
					(todo) => todo.id === updatedTodo.id
				)
				existingTodo.fields = updatedTodo.fields
				return existingTodos
			})
		} catch (error) {
			console.error(error)
		}
	}

	// for deleting a todo
	const deleteTodo = async (id) => {
		try {
			// we will send a DELETE request to the API with the id of todo we want to delete
			const res = await fetch('/api/deleteTodo', {
				method: 'Delete',
				body: JSON.stringify({ id }),
				headers: { 'Content-Type': 'application/json' },
			})
			await res.json()
			// them we will update the 'todos' by deleting the todo with specified id
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				updateTodo,
				deleteTodo,
				addTodo,
			}}>
			{children}
		</TodosContext.Provider>
	)
}

export { TodosContext, TodosProvider }
