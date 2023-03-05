/**
 * Retrieves a list of auctions from the specified URL using an HTTP GET request.
 * @async
 * @function
 * @param {string} url - The URL to retrieve the auctions from.
 * @returns {Promise<Object[]>} A promise that resolves with an array of auction objects.
 */
export async function getAuctions(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
