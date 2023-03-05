import { bidRequest } from "../api/bidRequest.mjs";
import { API_LISTING_URL } from "../constants/constants.mjs";

/**
 * Sets up a listener for the bid form, which sends a request to the server to post a bid on the current listing when the form is submitted.
 * @function postBid
 * @returns {void}
 */
export function postBid() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const form = document.querySelector(".bid-form");
  const API_BID_URL = API_LISTING_URL + id + "/bids";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const amount = parseInt(form.querySelector("#amount").value);
    const bid = {
      amount,
    };
    bidRequest(API_BID_URL, bid, method);
  });
}
