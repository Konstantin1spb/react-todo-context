import { useContext } from 'react';
import { AppContext } from '../context';

export const useDeleteTodo = () => {
	const { setCurrentId, refreshTodos, setRefreshTodos } = useContext(AppContext);
	const onClickDeleteTodo = (id) => {
		setCurrentId(id);
		console.log(id);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo deleted:', response);
				setRefreshTodos(!refreshTodos);
			});
	};

	return onClickDeleteTodo;
};
