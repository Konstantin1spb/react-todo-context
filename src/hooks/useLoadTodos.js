import { useEffect } from 'react';
import { useState } from 'react';
import { sortByTitle } from '../utils/sortByTitle';
import { AppContext } from '../context';
import { useContext } from 'react';

export const useLoadTodos = () => {
	const [todos, setTodos] = useState([]);
	const { refreshTodos, isSort } = useContext(AppContext);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				if (isSort) {
					const sortedTodos = loadedTodos.sort(sortByTitle);
					setTodos(sortedTodos);
				} else {
					setTodos(loadedTodos);
				}
			});
	}, [refreshTodos, isSort]);

	return todos;
};
