import { API_LISTINGS_URL } from "./../constants/constants.mjs";
import { getAuctions } from "./../api/getAuctions.mjs";
import { renderAuctions } from "./render.mjs";
import { setSearchListener } from "./../listeners/setSearchListener.mjs";
import { toggleLoadingIndicator } from "../utilities/loadingIndicator.mjs";

/**
 * Retrieves the auction listings from the API, renders them on the page, sets up the search functionality,
 * and toggles the loading indicator off.
 * @async
 * @function setupListings
 * @returns {Promise<void>}
 */
export async function setupListings() {
  const listings = await getAuctions(API_LISTINGS_URL);
  renderAuctions(listings);
  setSearchListener(listings);
  toggleLoadingIndicator(listings);
}
