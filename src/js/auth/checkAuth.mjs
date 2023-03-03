import * as storage from "./../storage/index.mjs";

/**
 * // Checks if the user is authorized to access pages based on their token, and redirects accordingly.
 *
 * @function
 * @example
 * //
 * ```js
 * checkAuthorization()
 * ```
 *  */
export function checkAuthorization() {
  const path = window.location.pathname;
  const GITHUB_BASE = "/semester-project-2";
  const token = storage.load("accessToken");
  if (
    (!token && path === GITHUB_BASE + "/home.html") ||
    (!token && path === "/home.html")
  ) {
    window.location.replace("./index.html");
  }
  if ((path === GITHUB_BASE || path === GITHUB_BASE + "/index.html") && token) {
    window.location.replace("./home.html");
  }
  if ((path === "/" || path === "/index.html") && token) {
    window.location.replace("./home.html");
  }
  if (
    (!token && path === GITHUB_BASE + "/auction-listing.html") ||
    (!token && path === "/auction-listing.html")
  ) {
    window.location.replace("./index.html");
  }
}
