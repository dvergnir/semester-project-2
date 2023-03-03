import { postAuction } from "../api/postAuction.mjs";
import { API_POST_URL } from "./../constants/constants.mjs";

/**
Creates an auction by attaching a submit event listener to a form, retrieving form data,
constructing an auction object, and sending a POST request to the server.
@function
@example
createAuction();
*/
export function createAuction() {
  const form = document.querySelector("#post-auction");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const title = formData.title.value;
    const description = formData.description.value;
    const endsAt = formData.endsAt.value;
    const media = [];
    const mediaOne = formData.mediaOne.value;
    const mediaTwo = formData.mediaTwo.value;
    const mediaThree = formData.mediaThree.value;
    if (mediaOne.length >= 1) {
      media.push(mediaOne);
    }
    if (mediaTwo.length >= 1) {
      media.push(mediaTwo);
    }
    if (mediaThree.length >= 1) {
      media.push(mediaThree);
    }
    const auction = {
      title,
      description,
      endsAt,
      media,
    };
    postAuction(API_POST_URL, auction, method);
  });
}
