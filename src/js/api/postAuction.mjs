import * as storage from "../storage/index.mjs";

/**
 * Send a POST request with authorization header and JSON body.
 * @async
 * @param {string} url - The URL to which the request is sent.
 * @param {Object} auction - The auction data to be sent as JSON body.
 * @param {string} method - The HTTP method of the request.
 * @throws {Error} If the response is not successful or an error occurs.
 * @returns {Promise<void>} A promise that resolves when the request is successful.
 */
export async function postAuction(url, auction, method) {
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
    console.log(auction);
    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
