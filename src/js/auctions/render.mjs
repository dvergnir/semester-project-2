import * as storage from "./../storage/index.mjs";

/**
Renders an auction listing on the page with the provided auction data by creating an HTML
element container, populating it with data, and appending it to the listings container on the page.
*@function
*@name renderAuction
*@param {Object} auctionData - The data object representing the auction to be rendered.
*@param {string[]} auctionData.media - An array of strings representing the URLs of the auction's media content.
*@param {string} auctionData.id - The unique identifier of the auction.
*@param {string} auctionData.title - The title of the auction.
*@param {Object} auctionData._count - An object containing information about the number of bids on the auction.
*@param {number} auctionData._count.bids - The number of bids on the auction.
*@param {string} auctionData.endsAt - A string representing the date and time that the auction ends.
*/
function renderAuction(auctionData) {
  const container = document.createElement("div");
  const listingsContainer = document.querySelector(".listings-container");
  const { media } = auctionData;
  container.classList.add(
    "col",
    "mx-auto",
    "listings-content",
    "container",
    "my-5"
  );
  container.id = auctionData.id;

  var date = auctionData.endsAt;
  var lengthOfDate = 10;
  var trimmedDate = date.substring(0, lengthOfDate);

  container.innerHTML = `<div class="col-sm text-left auction-wrapper h-100"">
  <div class="card mx-auto bg-secondary py-4 h-100">
  <div class="card-header h-100">
  <img
  class="card-img-top p-4"
  src=""
  alt="auctioned item"
  onerror="this.onerror=null;this.src='https://dummyimage.com/640x360/fff/aaa'"
/>
  </div>

    <div class="card-body">
      <h2 class="card-title h2 text-primary"></h2>
      <p class="card-bid display-7 text-primary">
      </p>
      <p class="card-ends display-7 text-primary">
      </p>
      
    </div>
    <div class=" text-center"><a href="" class="text-decoration-underline pe-auto display-7 auction-link" id="listing-link">View this auction</a>
    </div>
  </div>
</div>`;
  const token = storage.load("accessToken");
  if (!token) {
    container.querySelector("#listing-link").classList.add("d-none");
  }
  container.querySelector("#listing-link").href =
    "auction-listing.html?id=" + auctionData.id;
  container.querySelector("img").src = media[0];
  container.querySelector("h2").innerText = auctionData.title;
  container.querySelector(".card-bid").innerText =
    "Bids: " + auctionData._count.bids;
  container.querySelector(".card-ends").innerText = "Ends: " + trimmedDate;
  listingsContainer.append(container);
}

/**
Renders multiple auction listings on the page with the provided auction data by calling the renderAuction function
for each auction data object in the provided array.
*@function
*@name renderAuctions
*@param {Object[]} listings - An array of data objects representing the auctions to be rendered.
*/

export function renderAuctions(listings) {
  listings.forEach(renderAuction);
}
