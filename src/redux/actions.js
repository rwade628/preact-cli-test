import 'whatwg-fetch'

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