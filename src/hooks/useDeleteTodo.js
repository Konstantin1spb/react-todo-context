import { useSelector } from 'react-redux';
import { setNewId, deleteTodo } from '../actions/appActions';
import { selectRefreshTodosFlag } from '../selectors/appSelectors';

export const useDeleteTodo = (dispatch) => {
	const refreshTodosFlag = useSelector(selectRefreshTodosFlag);
	const onClickDeleteTodo = (id) => {
		dispatch(setNewId(id));
		dispatch(deleteTodo(id, refreshTodosFlag));
	};

	return onClickDeleteTodo;
};
