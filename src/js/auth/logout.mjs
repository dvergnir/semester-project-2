import * as storage from "./../storage/index.mjs";

export function logOut() {
  const signout = document.querySelector(".sign-out");
  signout.addEventListener("click", (event) => {
    event.preventDefault;
    storage.clear();
    window.location.replace("./index.html");
  });
}
