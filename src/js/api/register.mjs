/**
 * // Async fetch function that sends a HTTP POST request to the API server,
 *  with an object with the properties of a registered user
 * @param {string} url // string of the API url
 * @param {object} profile // Object of user properties
 * @param {string} method // Type of method from the form
 * @example
 * ```js
 * //
 * register(url, user, POST);
 * // returns {id: , name: '', email: '', avatar: ''}
 * ```
 */
export async function register(url, user, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    console.log(user);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
