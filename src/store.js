import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	editedTodoReducer,
	loadTodosReducer,
	newTodoReducer,
} from './reducers';

const reducer = combineReducers({
	appState: appReducer,
	editedTodoState: editedTodoReducer,
	loadTodosState: loadTodosReducer,
	newTodoState: newTodoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
