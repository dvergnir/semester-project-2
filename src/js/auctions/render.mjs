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
  <div class="card mx-auto bg-secondary py-4 h-100" style="width: 20rem">
  <div class="card-header h-100">
  <img
  class="card-img-top p-4"
  src=""
  alt="Card image cap"
  onerror="this.onerror=null;this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
/>
  </div>

    <div class="card-body">
      <h2 class="card-title h2 text-primary"></h2>
      <p class="card-bid display-7 text-primary">
      </p>
      <p class="card-ends display-7 text-primary">
      </p>
      
    </div>
    <div class=" text-center"><a href="" class="text-decoration-underline pe-auto display-7" id="listing-link">View this auction</a>
    </div>
  </div>
</div>`;
  container.querySelector("#listing-link").href =
    "auction-listing.html?id=" + auctionData.id;
  container.querySelector("img").src = media[0];
  container.querySelector("h2").innerText = auctionData.title;
  container.querySelector(".card-bid").innerText =
    "Bids: " + auctionData._count.bids;
  container.querySelector(".card-ends").innerText = "Ends: " + trimmedDate;
  listingsContainer.append(container);
}

export function renderAuctions(listings) {
  listings.forEach(renderAuction);
}
