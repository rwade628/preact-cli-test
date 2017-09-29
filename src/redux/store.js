import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	}),

	GET_LIST: ({ list, ...state }, { response }) => ({
		list: response,
		...state
	}),

	SET_SELECTED: ({ selected, ...state }, { select }) => ({
		selected: select,
		...state
	})
};

const INITIAL = {
	todos: [],
	list: [],
	selected: {}
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());
