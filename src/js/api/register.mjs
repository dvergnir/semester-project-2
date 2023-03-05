import { loginHandler } from "./../handlers/loginHandler.mjs";
import * as storage from "./../storage/index.mjs";
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
    if (response.ok) {
      const registerModal = new bootstrap.Modal("#viewRegisterModal");
      const loginModal = new bootstrap.Modal("#viewLoginModal");
      registerModal.hide();
      loginModal.show();
    }
  } catch (error) {
    console.log(error);
  }
}
