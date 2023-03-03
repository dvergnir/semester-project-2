/**
 * Checks if the provided array of auction listings is empty, and updates the HTML of the listings container to display an error message if so.
 * @function emptyListingsCheck
 * @param {Array} listings - The array of auction listings to check for emptiness.
 * @returns {void}
 */
export function emptyListingsCheck(listings) {
  if (listings.length <= 0) {
    const listingsContainer = document.querySelector(".listings-container");
    listingsContainer.innerHTML = "";
    listingsContainer.innerHTML += `<div class="text-primary text-center" id="listings-error">
    <p>
    There are no auctions matching your search.</p>
  </div>`;
  }
}

/**
 * Checks if the provided array of listings is empty, and updates the HTML of the listings container to display an error message if so.
 * @function emptyListingsCheck
 * @param {Array} listings - The array of auction listings to check for emptiness.
 * @returns {void}
 */
export function bidFeedback(response) {
  const feedbackContainer = document.querySelector(".bid-feedback");
  if (!response.ok) {
    feedbackContainer.innerHTML = "";
    feedbackContainer.innerHTML += `<div class="text-danger text-center " id="listings-error">
    <p>
    Your bid needs to be higher than current highest bid.</p>
  </div>`;
  }
}
