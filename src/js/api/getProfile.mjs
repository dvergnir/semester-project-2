import * as storage from "./../storage/index.mjs";

/**
Retrieves user profile data from the server
@async
@function getProfile
@param {string} url - The URL to fetch the profile data from
@returns {Promise<Object>} A promise that resolves to the user profile data
@throws {Error} Any error that occurred during the fetch request
*/
export async function getProfile(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {}
}
