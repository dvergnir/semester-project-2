const url = "https://api.noroff.dev/api/v1" + "/auction/listings";

export async function getAuctions() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //return await response.json();
    const auctionData = await response.json();
    console.log(auctionData);
  } catch (error) {
    console.log(error);
  }
}
