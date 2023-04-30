export default function authHeaders() {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    return { Authorization: 'Bearer ' + accessToken };
  } else {
    return {};
  }
}
