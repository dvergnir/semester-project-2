import { registerUser } from "./auth/registerUser.mjs";
import { loginUser } from "./auth/loginUser.mjs";
import { setupListings } from "./auctions/setup.mjs";
import { scrollToTop } from "./utilities/buttonToTop.mjs";
import { createAuction } from "./auctions/createAuction.mjs";
import { getSpecificAuction } from "./auctions/getSpecificAuction.mjs";
import { editAvatarListener } from "./listeners/editAvatarListener.mjs";
import { postBid } from "./user/bid.mjs";
import { setupProfile } from "./user/setup.mjs";
import { checkAuthorization } from "./auth/checkAuth.mjs";
//import { toggleLoadingIndicator } from "./utilities/loadingIndicator.mjs";

const GITHUB_BASE = "/semester-project-2";

export function router() {
  const path = window.location.pathname;

  // To make the routing work for both live-server and GitHub pages, I needed to add all these paths.
  if (
    path === GITHUB_BASE + "/" ||
    path === "/" ||
    path === GITHUB_BASE + "/index.html" ||
    path === "/index.html"
  ) {
    loginUser();
    registerUser();
    setupListings();
    //toggleLoadingIndicator();
    scrollToTop();
    checkAuthorization();
  } else if (path === GITHUB_BASE + "/home.html" || path === "/home.html") {
    setupProfile();
    setupListings();
    //toggleLoadingIndicator();
    scrollToTop();
    createAuction();
    editAvatarListener();
    checkAuthorization();
  } else if (
    path === GITHUB_BASE + "/auction-listing.html" ||
    path === "/auction-listing.html"
  ) {
    setupProfile();
    getSpecificAuction();
    //toggleLoadingIndicator();
    postBid();
    checkAuthorization();
  }
}
