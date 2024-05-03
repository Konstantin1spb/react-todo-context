import { useSelector } from 'react-redux';
import { selectNewTodo } from '../selectors/newTodoSelectors';
import { addNewTodo, newTodoOnChange } from '../actions';

export const useNewTodo = (refreshTodosFlag, dispatch) => {
	const newTodo = useSelector(selectNewTodo);

	const onChangeNewTodo = ({ target }) => {
		dispatch(newTodoOnChange(target.value));
	};

	const onSubmitNewTodo = (event) => {
		event.preventDefault();
		dispatch(addNewTodo(newTodo, refreshTodosFlag));
	};

	return { newTodo, onChangeNewTodo, onSubmitNewTodo };
};
