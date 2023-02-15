import * as storage from "../storage/index.mjs";

/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * registrationError(response);
 * ```
 */
export function loginError(response) {
  if (!response.ok) {
    storage.clear();
    const loginModal = document.querySelector(".error-container");
    loginModal.style.display = "block";
  } else if (response.ok) {
    window.location.replace("./Home/index.html");
  }
}
