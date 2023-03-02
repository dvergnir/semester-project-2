import * as storage from "./../storage/index.mjs";
import { API_PROFILE_URL } from "./../constants/constants.mjs";
import { getProfile } from "./../api/getProfile.mjs";
import { renderProfile } from "./renderProfile.mjs";
import { logOut } from "../auth/logout.mjs";

export function setupProfile() {
  getUserProfile();
  logOut();
}
export async function getUserProfile() {
  const user = storage.load("user").name;
  const API_USERPROFILE_URL = `${API_PROFILE_URL}${user}`;
  const profile = await getProfile(API_USERPROFILE_URL);
  renderProfile(profile);
}
