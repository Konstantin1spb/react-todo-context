export const initialAppState = {
	currentId: undefined,
	refreshTodosFlag: false,
	searchedTodo: undefined,
	isSortFlag: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case 'SET_NEW_ID': {
			return {
				...state,
				currentId: action.payload,
			};
		}
		case 'REFRESH_TODOS': {
			return {
				...state,
				refreshTodosFlag: !action.payload,
			};
		}
		case 'SEARCH_TODO': {
			return {
				...state,
				searchedTodo: action.payload,
			};
		}
		case 'CHANGE_SORT_FLAG': {
			return {
				...state,
				isSortFlag: !action.payload,
			};
		}
		default:
			return state;
	}
};
