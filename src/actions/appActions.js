export const setNewId = (id) => {
	return {
		type: 'SET_NEW_ID',
		payload: id,
	};
};

export const refreshTodos = (delta) => {
	return {
		type: 'REFRESH_TODOS',
		payload: delta,
	};
};

export const searchTodo = (delta) => {
	return {
		type: 'SEARCH_TODO',
		payload: delta,
	};
};

export const changeSortFlag = (delta) => {
	return {
		type: 'CHANGE_SORT_FLAG',
		payload: delta,
	};
};

export const deleteTodo = (id, refreshTodosFlag) => {
	return (dispatch) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo deleted:', response);
				dispatch({
					type: 'REFRESH_TODOS',
					payload: refreshTodosFlag,
				});
			});
	};
};
