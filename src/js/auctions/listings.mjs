import { API_LISTINGS_URL } from "../constants/constants.mjs";
import { getAuctions } from "../api/getAuctions.mjs";
import { renderAuctions } from "./render.js";

async function auctionListings() {
  const listings = await getAuctions(API_LISTINGS_URL);
  renderAuctions(listings);
}

auctionListings();
