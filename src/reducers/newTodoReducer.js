export const initialNewTodoState = {
	newTodo: undefined,
};

export const newTodoReducer = (state = initialNewTodoState, action) => {
	switch (action.type) {
		case 'SET_NEW_TODO': {
			return {
				...state,
				newTodo: action.payload,
			};
		}
		default:
			return state;
	}
};
