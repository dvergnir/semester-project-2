import * as storage from "./../storage/index.mjs";
import { bidFeedback } from "../error.mjs/error.mjs";

export async function bidRequest(url, auction, method) {
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
    bidFeedback(response);

    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
