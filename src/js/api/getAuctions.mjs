export async function getAuctions(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const auctionData = await response.json();
    console.log(auctionData);
  } catch (error) {
    console.log(error);
  }
}
