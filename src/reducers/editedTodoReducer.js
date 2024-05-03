export const initialEditedTodoState = {
	editedTodo: undefined,
	editedTodoError: true,
	openModalFlag: false,
};

export const editedTodoReducer = (state = initialEditedTodoState, action) => {
	switch (action.type) {
		case 'EDIT_TODO': {
			return {
				...state,
				editedTodo: action.payload,
			};
		}
		case 'EDIT_TODO_ERROR': {
			return {
				...state,
				editedTodoError: action.payload,
			};
		}
		case 'CHANGE_OPEN_MODAL_FLAG': {
			return {
				...state,
				openModalFlag: action.payload,
			};
		}
		default:
			return state;
	}
};
