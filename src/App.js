import styles from './app.module.css';
import { useState } from 'react';
import { useNewTodo, useEditedTodo, useSearchTodo } from './hooks/index';
import { Todos } from './components/Todos/Todos';
import { AppContext } from './context';

const App = () => {
	const [currentId, setCurrentId] = useState();
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [searchTodo, setSearchTodo] = useState(null);
	const [isSort, setIsSort] = useState(false);

	const { newTodo, onChangeNewTodo, onSubmitNewTodo } = useNewTodo(
		refreshTodos,
		setRefreshTodos,
	);

	const {
		editedTodo,
		onClickOpenToEditTodo,
		onChangeEditedTodo,
		onSubmitEditedTodo,
		openModal,
		editedTodoError,
	} = useEditedTodo(refreshTodos, setRefreshTodos, currentId, setCurrentId);

	const onChangeSearchTodo = useSearchTodo(setSearchTodo);

	const contextData = {
		refreshTodos,
		isSort,
		setCurrentId,
		setRefreshTodos,
		searchTodo,
		onClickOpenToEditTodo,
	};

	return (
		<main className={styles.todos}>
			<div
				className={`${styles.todosContainer} ${openModal ? styles.blured : null}`}
			>
				<div className={styles.todosControls}>
					<form onSubmit={onSubmitNewTodo}>
						<input onChange={onChangeNewTodo} value={newTodo}></input>
						<button>Add todo</button>
					</form>
					<input
						onChange={onChangeSearchTodo}
						value={searchTodo}
						placeholder="Search todo"
					></input>
					<button onClick={() => setIsSort(!isSort)}>
						{isSort ? 'Unsort' : 'Sort'}
					</button>
				</div>
				<AppContext.Provider value={contextData}>
					<Todos></Todos>
				</AppContext.Provider>
			</div>
			<form
				onSubmit={onSubmitEditedTodo}
				className={`${styles.editTodoForm} ${openModal ? styles.active : null}`}
			>
				{editedTodoError && <div className={styles.error}>{editedTodoError}</div>}
				<input onChange={onChangeEditedTodo} value={editedTodo}></input>
				<button disabled={!!editedTodoError}>Edit todo</button>
			</form>
		</main>
	);
};

export default App;
