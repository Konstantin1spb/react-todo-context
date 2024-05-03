import {
	setNewId,
	editTodo,
	editTodoOnChange,
	changeOpenModalFlag,
	editTodoError,
} from '../actions/';
import {
	selectCurrentId,
	selectEditedTodo,
	selectEditedTodoError,
	selectOpenModalFlag,
} from '../selectors/';
import { useSelector } from 'react-redux';

export const useEditedTodo = (refreshTodosFlag, dispatch) => {
	const currentId = useSelector(selectCurrentId);
	const editedTodo = useSelector(selectEditedTodo);
	const editedTodoError = useSelector(selectEditedTodoError);
	const openModalFlag = useSelector(selectOpenModalFlag);

	const onClickOpenToEditTodo = (id) => {
		dispatch(setNewId(id));
		dispatch(changeOpenModalFlag(true));
	};

	const onChangeEditedTodo = ({ target }) => {
		dispatch(editTodoOnChange(target.value));
		if (target.value.length === 0) {
			dispatch(editTodoError('Новое название не должно быть пустым.'));
		} else {
			dispatch(editTodoError(false));
		}
	};

	const onSubmitEditedTodo = (event) => {
		event.preventDefault();
		dispatch(editTodo(currentId, editedTodo, refreshTodosFlag));
	};

	return {
		editedTodo,
		onClickOpenToEditTodo,
		onChangeEditedTodo,
		onSubmitEditedTodo,
		openModalFlag,
		editedTodoError,
	};
};
