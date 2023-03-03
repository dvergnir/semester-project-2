import * as storage from "./../storage/index.mjs";
import { API_PROFILE_URL } from "./../constants/constants.mjs";
import { getProfile } from "./../api/getProfile.mjs";
import { renderProfile } from "./renderProfile.mjs";
import { logOut } from "../auth/logout.mjs";

/**
 * Sets up the user's profile page by fetching their profile data and setting up the logout function.
 * @function setupProfile
 * @returns {void}
 */
export function setupProfile() {
  getUserProfile();
  logOut();
}

/**
 * Fetches the user's profile data from the API and renders it onto the profile page.
 * @function getUserProfile
 * @returns {Promise<void>}
 */
export async function getUserProfile() {
  const user = storage.load("user").name;
  const API_USERPROFILE_URL = `${API_PROFILE_URL}${user}`;
  const profile = await getProfile(API_USERPROFILE_URL);
  renderProfile(profile);
}
