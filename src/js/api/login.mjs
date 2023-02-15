import * as storage from "./../storage/index.mjs";
import { loginError } from "../error.mjs/error.mjs";

/**
 * // Async fetch function that sends a HTTP POST request to the API server,
 *  with an object of the properties of a user that wants to log in.
 * @param {string} url // url path to send the POST request to
 * @param {object} user // object of the user values that needs to be logged in
 * @param {string} method  // HTTP request
 * @example
 * ```
 * // Call the function
 * login(url, user, POST)
 * ```
 */
export async function login(url, user, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    console.log(json);
    const { accessToken, ...name } = json;
    storage.save("accessToken", accessToken);
    storage.save("user", name);
    loginError(response);
  } catch (error) {
    console.log(error);
  }
}
