function renderAuction(auctionData) {
  const container = document.createElement("div");
  container.id = auctionData.id;

  container.innerHTML = `<div class="col text-center auction-wrapper">
  <div class="card mx-auto my-5 bg-secondary py-4" style="width: 18rem">
    <img
      class="card-img-top p-4"
      src="./assets/images/dumimage.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h2 class="card-title h2 text-primary"></h2>
      <p class="card-text font-italic display-7 text-primary">
      </p>
    </div>
  </div>
</div>`;
  container.querySelector("h2").innerText = "Coffee table";
  container.querySelector(".card-text").innerText = "Time left: 00:00";
  document.body.append(container);
}

export function renderAuctions(listings) {
  listings.foreach(renderAuction);
}
