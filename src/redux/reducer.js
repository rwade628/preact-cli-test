import 'whatwg-fetch'

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const GET_LIST = "GET_LIST";
const SET_SELECTED = "SET_SELECTED";

const INITIAL = {
	todos: [],
	list: [],
	selected: {}
};

const reducer = (state = INITIAL, action) => {
	switch (action.type) {
		case ADD_TODO:
			let newTodo = {
				id: Math.random().toString(36).substring(2),
				text: action.text
			}
			let updatedTodos = [newTodo].concat(state.todos);
			return Object.assign({}, state, {todos: updatedTodos});
		case REMOVE_TODO:
			let arr = state.todos.filter((todo) => {
				return !(todo.id === action.id)
			});
			return Object.assign({}, state, {todos: arr});
		case GET_LIST:
			return Object.assign({}, state, {list: action.list});
		case SET_SELECTED:
			return Object.assign({}, state, {selected: action.selected});
		default:
			return state;
	}
};

export default reducer;

export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	};
}

export function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}

export function getList (folder) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const url = `/api/list/${folder}`
      console.log('fetching', url)
      fetch(url).then((response) => {
        return response.json()
      }).then((json) => {
        console.log('got response from /list', json)
        dispatch({
          type    : 'GET_LIST',
          payload : json
        })
        resolve()
      }).catch((ex) => {
        console.log('parsing failed', ex)
        reject()
      })
    })
  }
}

export function setSelected (selected) {
  return {
    type    : 'SET_SELECTED',
    payload : selected
  }
}