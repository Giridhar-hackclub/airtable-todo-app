import 'tailwindcss/tailwind.css'
import { TodosProvider } from '../context/todos'

function MyApp({ Component, pageProps }) {
	return (
		<TodosProvider>
				<Component {...pageProps} />
		</TodosProvider>
	)
}

export default MyApp
