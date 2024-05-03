import { useEffect } from 'react';
import { sortByTitle } from '../utils/sortByTitle';

export const setTodos = (refreshTodosFlag, isSortFlag) => {
	return (dispatch) => {
		useEffect(() => {
			fetch('http://localhost:3005/todos')
				.then((loadedData) => loadedData.json())
				.then((loadedTodos) => {
					if (isSortFlag) {
						const sortedTodos = loadedTodos.sort(sortByTitle);
						dispatch({
							type: 'SET_TODOS',
							payload: sortedTodos,
						});
					} else {
						dispatch({
							type: 'SET_TODOS',
							payload: loadedTodos,
						});
					}
				});
		}, [refreshTodosFlag, isSortFlag]);
	};
};
