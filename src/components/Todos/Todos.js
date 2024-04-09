import { useLoadTodos, useDeleteTodo } from '../../hooks';
import styles from '../../app.module.css';
import { AppContext } from '../../context';
import { useContext } from 'react';

export const Todos = () => {
	const { searchTodo, onClickOpenToEditTodo } = useContext(AppContext);
	const todos = useLoadTodos();
	const onClickDeleteTodo = useDeleteTodo();
	return (
		<>
			{todos.length ? (
				todos.map(({ id, title }) => (
					<div
						key={id}
						className={`${styles.todo} ${searchTodo && !title.includes(searchTodo) ? styles.hide : styles.show}`}
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
