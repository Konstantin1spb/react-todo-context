import styles from './app.module.css';
import { useNewTodo, useEditedTodo, useSearchTodo } from './hooks/index';
import { Todos } from './components/Todos/Todos';
import { AppContext } from './context';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsSortFlag,
	selectRefreshTodosFlag,
	selectSearchedTodo,
} from './selectors/appSelectors';
import { changeSortFlag } from './actions/appActions';

const App = () => {
	const dispatch = useDispatch();
	const refreshTodosFlag = useSelector(selectRefreshTodosFlag);
	const searchedTodo = useSelector(selectSearchedTodo);
	const isSortFlag = useSelector(selectIsSortFlag);

	const { newTodo, onChangeNewTodo, onSubmitNewTodo } = useNewTodo(
		refreshTodosFlag,
		dispatch,
	);

	const {
		editedTodo,
		onClickOpenToEditTodo,
		onChangeEditedTodo,
		onSubmitEditedTodo,
		openModalFlag,
		editedTodoError,
	} = useEditedTodo(refreshTodosFlag, dispatch);

	const onChangeSearchTodo = useSearchTodo(dispatch);

	const contextData = {
		onClickOpenToEditTodo,
	};

	return (
		<main className={styles.todos}>
			<div
				className={`${styles.todosContainer} ${openModalFlag ? styles.blured : null}`}
			>
				<div className={styles.todosControls}>
					<form onSubmit={onSubmitNewTodo}>
						<input onChange={onChangeNewTodo} value={newTodo}></input>
						<button>Add todo</button>
					</form>
					<input
						onChange={onChangeSearchTodo}
						value={searchedTodo}
						placeholder="Search todo"
					></input>
					<button onClick={() => dispatch(changeSortFlag(isSortFlag))}>
						{isSortFlag ? 'Unsort' : 'Sort'}
					</button>
				</div>
				<AppContext.Provider value={contextData}>
					<Todos
						dispatch={dispatch}
						refreshTodosFlag={refreshTodosFlag}
						searchedTodo={searchedTodo}
						isSortFlag={isSortFlag}
					></Todos>
				</AppContext.Provider>
			</div>
			<form
				onSubmit={onSubmitEditedTodo}
				className={`${styles.editTodoForm} ${openModalFlag ? styles.active : null}`}
			>
				{editedTodoError && <div className={styles.error}>{editedTodoError}</div>}
				<input onChange={onChangeEditedTodo} value={editedTodo}></input>
				<button disabled={!!editedTodoError}>Edit todo</button>
			</form>
		</main>
	);
};

export default App;
