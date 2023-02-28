import { renderAuctions } from "./../auctions/render.mjs";
import { filterListings } from "./../auctions/filter.mjs";
import { emptyListingsCheck } from "./../error.mjs/error.mjs";
/**
 * // Function that registers search value and gets the array from the filterPosts() function
 * // Then runs the renderPost function with the new array
 * @param {*} listings
 * @example
 * //
 * ```js
 * // call the function setSearchListener to register searchvalue and get an array of filtered posts
 * setSearchListener(posts);
 * ```
 *  */
export function setSearchListener(listings) {
  const search = document.getElementById("searchbar");
  search.oninput = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredListings = filterListings(searchValue, listings);
    renderAuctions(filteredListings);
    emptyListingsCheck(filteredListings);
  };
}
