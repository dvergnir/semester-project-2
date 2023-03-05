import * as storage from "./../storage/index.mjs";

/**
 * Logs the user out of the application by clearing their access token and redirecting to the login page.
 *
 * @function
 * @returns {void}
 */
export function logOut() {
  const signout = document.querySelector(".sign-out");
  signout.addEventListener("click", (event) => {
    event.preventDefault;
    storage.clear();
    window.location.replace("./index.html");
  });
}
