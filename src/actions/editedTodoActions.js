export const editTodoOnChange = (delta) => {
	return {
		type: 'EDIT_TODO',
		payload: delta,
	};
};

export const editTodoError = (delta) => {
	return {
		type: 'EDIT_TODO_ERROR',
		payload: delta,
	};
};

export const changeOpenModalFlag = (delta) => {
	return {
		type: 'CHANGE_OPEN_MODAL_FLAG',
		payload: delta,
	};
};

export const editTodo = (currentId, editedTodo, refreshTodosFlag) => {
	return (dispatch) => {
		fetch(`http://localhost:3005/todos/${currentId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: editedTodo,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Todo edited:', response);
				dispatch({
					type: 'REFRESH_TODOS',
					payload: refreshTodosFlag,
				});
			})
			.finally(() => dispatch(changeOpenModalFlag(false)));
	};
};
