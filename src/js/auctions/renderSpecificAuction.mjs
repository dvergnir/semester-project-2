import * as storage from "./../storage/index.mjs";

/**
Renders a specific auction in the DOM using the provided auction data.
*@param {Object} auctionData - An object containing information about the auction.
*@param {string} auctionData.id - The unique identifier for the auction.
*@param {string} auctionData.title - The title of the auction.
*@param {string} auctionData.description - The description of the auction.
*@param {Object[]} auctionData.bids - An array of objects containing information about each bid.
*@param {Object} auctionData.seller - An object containing information about the seller.
*@param {string} auctionData.seller.name - The name of the seller.
*@param {Object[]} auctionData.media - An array of strings containing URLs to images for the auction.
*@param {string} auctionData.endsAt - The date and time when the auction ends.
*/
export function renderSpecificAuction(auctionData) {
  const auctionWrapper = document.createElement("div");
  const specificContainer = document.querySelector(".specific-container");
  auctionWrapper.classList.add("specific", "mx-auto");
  auctionWrapper.id = auctionData.id;
  const bids = auctionData.bids;
  const bidForm = document.querySelector(".bid-form");
  const headTitle = document.querySelector("title");
  const media = auctionData.media;
  let defaultImage = "https://dummyimage.com/640x360/fff/aaa";
  if (media.length === 0) media[0] = defaultImage;

  headTitle.innerText = auctionData.title + " | SwiftAuction";

  const { name } = storage.load("user");

  if (name === auctionData.seller.name) {
    bidForm.classList.add("d-none");
  }

  var date = auctionData.endsAt;
  var lengthOfDate = 10;
  var trimmedDate = date.substring(0, lengthOfDate);

  auctionWrapper.innerHTML = `<h1 class="text-center mt-5 display-6 text-primary">Title</h1>
  <div
    id="carousel"
    class="carousel carousel-container slide mx-auto"
    data-ride="carousel"
  >
    <div class="carousel-inner">
    <!-- Carousel images -->
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel"
      role="button"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon text-bg-primary"
        aria-hidden="true"
      >
      </span>
      <span class="sr-only"></span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel"
      role="button"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon text-bg-primary"
        aria-hidden="true"
      ></span>
      <span class="sr-only"></span>
    </a>
  </div>
  <p class="specific-text text-primary mx-auto w-100 mt-5">
  </p>
  <p class="highest-bid display-7 text-primary"></p>
  <p class="bids display-7 text-primary"></p>
  <p class="endsAt display-7 text-primary">
      </p>
      <div class="bid-feedback"></div>

</div>`;
  auctionWrapper.querySelector(".specific-text").innerText =
    auctionData.description;
  auctionWrapper.querySelector("h1").innerText = auctionData.title;
  let highestBid = Math.max(...bids.map((winningBid) => winningBid.amount));
  if (highestBid > 0) {
    auctionWrapper.querySelector(".highest-bid").innerText =
      "Highest bid: $" + highestBid;
  } else {
    auctionWrapper.querySelector(".highest-bid").innerText = "";
  }
  if (auctionData._count.bids > 0) {
    auctionWrapper.querySelector(".bids").innerText =
      "Bids: " + auctionData._count.bids;
  } else {
    auctionWrapper.querySelector(".bids").innerText = "No bids yet.";
  }

  auctionWrapper.querySelector(".endsAt").innerText = "Ends at: " + trimmedDate;
  const auctionMedia = auctionData.media;

  const carousel = auctionWrapper.querySelector(".carousel-inner");
  auctionMedia.forEach((imgSrc) => {
    const carouselItem = new DOMParser().parseFromString(
      `
      <div class="carousel-item active">
        <img src="" class="carousel-img d-block mx-auto"  alt="auctioned item"/>
      </div>
     `,
      "text/html"
    );
    carouselItem.querySelector("img").src = imgSrc;
    carousel.append(carouselItem.querySelector(".carousel-item"));
  });

  specificContainer.append(auctionWrapper);
}
