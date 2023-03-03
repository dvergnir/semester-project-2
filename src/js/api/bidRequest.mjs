import * as storage from "./../storage/index.mjs";
import { bidFeedback } from "../error.mjs/error.mjs";

/**
 * Sends a bid request to the specified URL using the given HTTP method and auction data.
 * @async
 * @function
 * @param {string} url - The URL to send the bid request to.
 * @param {Object} auction - The auction data to include in the bid request body.
 * @param {string} method - The HTTP method to use for the bid request (e.g. "POST", "PUT").
 * @returns {Promise<void>} A promise that resolves with no value.
 */
export async function bidRequest(url, auction, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(auction),
    });
    bidFeedback(response);

    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
