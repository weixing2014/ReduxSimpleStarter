const SERVER_URL = 'https://todo-backend-rails.herokuapp.com/'

function completePromiseOf(fetchPromise) {
  return fetchPromise.then(response => {
    return response.json()
  }).then(data => {
    return data
  }).catch(err => {
  })
}

export function deleteTodoRequested(id) {
  return completePromiseOf(fetch(SERVER_URL + id, {
    method: 'DELETE'
  }))
}

export function fetchTodosRequested() {
  return completePromiseOf(fetch(SERVER_URL, {
    method: 'get',
    dataType: 'jsonp'
  }))
}

export function addTodoRequested(todo) {
  return completePromiseOf(fetch(SERVER_URL, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    dataType: 'jsonp',
    body: JSON.stringify(todo)
  }))
}
