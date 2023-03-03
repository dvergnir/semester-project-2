import { API_PROFILE_URL } from "./../constants/constants.mjs";
import * as storage from "./../storage/index.mjs";
import { putAvatar } from "./../api/putAvatar.mjs";

/**
 * Sets up a listener for the avatar edit form, which sends a request to the server to update the user's avatar when the form is submitted.
 * @function editAvatarListener
 * @returns {void}
 */
export function editAvatarListener() {
  const user = storage.load("user").name;
  const form = document.querySelector("#avatar-form");
  const API_AVATAR_URL = API_PROFILE_URL + user + "/media";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const avatar = formData.editAvatar.value;
    const user = {
      avatar: avatar,
    };
    console.log(user);
    putAvatar(API_AVATAR_URL, user);
  });
}
