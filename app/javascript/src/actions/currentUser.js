export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CREATE_LIKE = 'CREATE_LIKE'

export function setCurrentUser() {
  const promise = fetch('/api/current')
    .then(response => response.json())

  return {
    type: SET_CURRENT_USER,
    payload: promise
  }
}

export function createLike(user, receiver_id) {
  const like = {user_id: user.id, receiver_id}
  const promise = fetch("/api/likes", {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify(like),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        "X-User-Token": user.authentication_token,
        "X-User-Email": user.email
    }
  })

  return {
    type: CREATE_LIKE,
    payload: like
  }
}
