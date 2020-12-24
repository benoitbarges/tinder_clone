export const CREATE_MATCH = 'CREATE_MATCH'

export async function createMatch(user) {
  const request = await fetch("/api/matches", {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    // body: JSON.stringify(),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        "X-User-Token": user.authentication_token,
        "X-User-Email": user.email
    }
  })
  const match = await request.json();
  console.log(match)

  return {
    type: CREATE_MATCH,
    payload: match
  }
}
