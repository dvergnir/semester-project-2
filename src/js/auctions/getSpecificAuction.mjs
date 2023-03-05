import { API_LISTING_URL } from "./../constants/constants.mjs";
import { getAuctions } from "./../api/getAuctions.mjs";
import { renderSpecificAuction } from "./renderSpecificAuction.mjs";
import { toggleLoadingIndicator } from "../utilities/loadingIndicator.mjs";

/**
Retrieves a specific auction by parsing the URL search string for an "id" parameter,
constructing an API endpoint URL with that parameter, sending a GET request to the server,
and rendering the auction listing on the page.
*@async
*@function
*/
export async function getSpecificAuction() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const API_SPECIFIC_URL = API_LISTING_URL + id + "?_seller=true&_bids=true";
  const listing = await getAuctions(API_SPECIFIC_URL);
  renderSpecificAuction(listing);
  toggleLoadingIndicator(listing);
}
