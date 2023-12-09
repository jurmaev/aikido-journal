const ACCESS_TOKEN = 'aikido-journal-access-token';

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function setToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN, token);
}

export function dropToken() {
  localStorage.removeItem(ACCESS_TOKEN);
}
