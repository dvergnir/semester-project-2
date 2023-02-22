import { registerUser } from "./auth/registerUser.mjs";
import { loginUser } from "./auth/loginUser.mjs";
import { setupListings } from "./auctions/setup.mjs";
import { scrollToTop } from "./utilities.js/buttonToTop.mjs";
import { createAuction } from "./auctions/createAuction.mjs";
import { getSpecificAuction } from "./auctions/getSpecificAuction.mjs";

export function router() {
  const path = window.location.pathname;

  if (path === "/index.html" || path === "./index.html") {
    loginUser();
    registerUser();
    setupListings();
    scrollToTop();
  } else if (path === "/home.html" || path === "./home.html") {
    setupListings();
    scrollToTop();
    createAuction();
  } else if (
    path === "/auction-listing.html" ||
    path === "./auction-listing.html"
  ) {
    getSpecificAuction();
  }
}
