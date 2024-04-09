export const useSearchTodo = (setSearchTodo) => {
	const onChangeSearchTodo = ({ target }) => {
		setSearchTodo(target.value);
	};

	return onChangeSearchTodo;
};
