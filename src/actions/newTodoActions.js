export const newTodoOnChange = (delta) => {
	return {
		type: 'SET_NEW_TODO',
		payload: delta,
	};
};

export const addNewTodo = (newTodo, refreshTodosFlag) => {
	return (dispatch) => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTodo,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo added:', response);
				dispatch({
					type: 'REFRESH_TODOS',
					payload: refreshTodosFlag,
				});
			});
	};
};
