export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export function setCurrentUser() {
  const promise = fetch('/api/current')
    .then(response => response.json())

  return {
    type: SET_CURRENT_USER,
    payload: promise
  }
}

