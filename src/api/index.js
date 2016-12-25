const SERVER_URL = 'https://todo-backend-rails.herokuapp.com/'

export function addTodo({ body, onSuccess, onFailure }) {
  fetch(SERVER_URL, {
    method: 'post',
    dataType: 'jsonp',
    body
  }).then(response => {
    const {status, statusText} = response

    if (status >= 200 && status < 300) {
      return response.json()
    } else {
      onFailure(statusText)
    }
  }).then(data => {
    onSuccess(data)
  }).catch(err => {
    onFailure(err)
  })
}

export function fetchTodos({ onSuccess, onFailure }) {
  fetch(SERVER_URL, {
    method: 'get',
    dataType: 'jsonp'
  }).then(response => {
    const {status, statusText} = response

    if (status >= 200 && status < 300) {
      return response.json()
    } else {
      onFailure(statusText)
    }
  }).then(data => {
    onSuccess(data)
  }).catch(error => {
    onFailure(error)
  })
}