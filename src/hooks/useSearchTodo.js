import { searchTodo } from '../actions/appActions';

export const useSearchTodo = (dispatch) => {
	const onChangeSearchTodo = ({ target }) => {
		dispatch(searchTodo(target.value));
	};

	return onChangeSearchTodo;
};
