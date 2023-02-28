import * as storage from "./../storage/index.mjs";

export async function getProfile(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {}
}
