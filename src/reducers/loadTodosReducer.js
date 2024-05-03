export const initialLoadTodosState = {
	todos: [],
};

export const loadTodosReducer = (state = initialLoadTodosState, action) => {
	switch (action.type) {
		case 'SET_TODOS': {
			return {
				...state,
				todos: action.payload,
			};
		}
		default:
			return state;
	}
};
