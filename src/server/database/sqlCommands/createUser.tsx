export function createUser() {
  return "INSERT INTO users (name, password) VALUES (?, ?)"
}
