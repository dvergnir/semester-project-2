import * as storage from "./../storage/index.mjs";

export async function putAvatar(url, user, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      window.location.reload();
    } else if (!response.ok) {
      throw alert("Couldnt change your avatar, try again");
    }
  } catch (error) {
    console.log(error);
    throw alert("Couldnt change your avatar, try again");
  }
}
