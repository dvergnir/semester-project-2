import { API_LISTINGS_URL } from "../constants/constants.mjs";
import { getAuctions } from "../api/getAuctions.mjs";
import { renderAuctions } from "./render.mjs";
import { setSearchListener } from "../listeners/setSearchListener.mjs";

export async function setupListings() {
  const listings = await getAuctions(API_LISTINGS_URL);
  renderAuctions(listings);
  setSearchListener(listings);
}
