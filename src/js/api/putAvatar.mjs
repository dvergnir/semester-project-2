import * as storage from "./../storage/index.mjs";
import { changeAvatarHandler } from "../handlers/changeAvatarHandler.mjs";

/**
 * Send a PUT request to update user's avatar.
 *
 * @async
 * @function
 * @param {string} url - The endpoint URL to send the request.
 * @param {object} user - The user object to update the avatar.
 * @param {string} method - The HTTP method to use.
 * @returns {Promise<void>} - A Promise that resolves with no value when the request is complete.
 */
export async function putAvatar(url, user, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    changeAvatarHandler(response);
  } catch (error) {
    console.log(error);
  }
}
