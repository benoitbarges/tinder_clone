export const SET_USERS = 'SET_USERS'

export function setUsers() {
  const promise = fetch('/api/users')
    .then(response => response.json())

  return {
    type: SET_USERS,
    payload: promise
  }
}
