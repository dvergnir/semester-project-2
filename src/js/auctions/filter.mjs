/**
 * // Function that takes the searchvalue as param and uses the filter method to return a new array of filtered posts
 * // Empties current HTML to return new results with the renderPost() function through setSearchListener()
 * @param {*} searchValue
 * @param {*} listings
 * @returns
 * @example
 * ```js
 * //Call the function using target value and posts as arguments
 * filterPosts(searchValue, posts)
 * return true;
 * ```
 */
export function filterListings(searchValue, listings) {
  const listingsContainer = document.querySelector(".listings-container");
  listingsContainer.innerHTML = "";
  const filteredListings = listings.filter(function (auctionData) {
    if (auctionData.title.toLowerCase().includes(searchValue)) {
      return true;
    }
  });

  return filteredListings;
}
