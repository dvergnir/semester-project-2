import { registerUser } from "./auth/registerUser.mjs";
import { loginUser } from "./auth/loginUser.mjs";
import { setupListings } from "./auctions/setup.mjs";
import { scrollToTop } from "./utilities.js/buttonToTop.mjs";

export function router() {
  const path = window.location.pathname;

  if (path === "/index.html" || "./index.html") {
    loginUser();
    registerUser();
    setupListings();
    scrollToTop();
  } else if (path === "/Home/index.html") {
    setupListings();
    scrollToTop();
  }
}
