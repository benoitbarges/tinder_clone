export const CREATE_LIKE = "CREATE_LIKE"

export function createLike(user, receiver_id) {
  const like = {user_id: user.infos.id, receiver_id}
  const promise = fetch("/api/likes", {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify(like),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        "X-User-Token": user.infos.authentication_token,
        "X-User-Email": user.infos.email
    }
  })

  return {
    type: CREATE_LIKE,
    payload: like
  }
}
