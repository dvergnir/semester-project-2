import * as storage from "../storage/index.mjs";

export async function postAuction(url, auction, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(auction),
    });
    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
