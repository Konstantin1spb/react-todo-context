import { useSelector } from 'react-redux';
import { selectTodos } from '../selectors/loadTodosSelectors';
import { setTodos } from '../actions';

export const useLoadTodos = (refreshTodosFlag, isSortFlag, dispatch) => {
	const todos = useSelector(selectTodos);

	dispatch(setTodos(refreshTodosFlag, isSortFlag));

	return todos;
};
