import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { table, minifyRecords } from './utils/Airtable'
import { TodosContext } from '../context/todos'
import TodoForm from '../components/TodoForm'
import Todo from '../components/Todo'

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext)

	useEffect(() => {
		setTodos(initialTodos)
	}, [initialTodos, setTodos])

  return (
    <div className='container mx-auto my-6 max-w-xl'>
      <Head>
        <title>{ "@Todo App" }</title>
      </Head>

      <main>
        <p className='text-2xl font-bold text-grey-800 py-2'>✅ Todo App</p>
        <TodoForm />
        <ul>
				{todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
			</ul>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
	try {
		const todos = await table.select({}).firstPage()
		return {
			props: {
				initialTodos: minifyRecords(todos),
			},
		}
	} catch (error) {
		console.log(error)
		return {
			props: {
				err: 'Something went wrong 😕',
			},
		}
	}
}