import { useLoadTodos, useDeleteTodo } from '../../hooks';
import styles from '../../app.module.css';
import { AppContext } from '../../context';
import { useContext } from 'react';

export const Todos = ({ dispatch, refreshTodosFlag, searchedTodo, isSortFlag }) => {
	const { onClickOpenToEditTodo } = useContext(AppContext);
	const todos = useLoadTodos(refreshTodosFlag, isSortFlag, dispatch);
	const onClickDeleteTodo = useDeleteTodo(dispatch);
	return (
		<>
			{todos.length ? (
				todos.map(({ id, title }) => (
					<div
						key={id}
						className={`${styles.todo} ${searchedTodo && !title.includes(searchedTodo) ? styles.hide : styles.show}`}
					>
						{title}
						<div>
							<span
								className={styles.editButton}
								onClick={() => onClickOpenToEditTodo(id)}
							></span>
							<span
								className={styles.deleteButton}
								onClick={() => onClickDeleteTodo(id)}
							></span>
						</div>
					</div>
				))
			) : (
				<span>Add some todos!</span>
			)}
		</>
	);
};
