import * as storage from "./../storage/index.mjs";

/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * registrationError(response);
 * ```
 */
export function loginHandler(response) {
  if (!response.ok) {
    storage.clear();
    const credError = document.getElementById("cred-error");
    credError.style.display = "block";
  } else if (response.ok) {
    window.location.replace("./home.html");
  }
}
