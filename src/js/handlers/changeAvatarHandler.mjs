/**
 * Handles the response from the server after attempting to change the user's avatar. If the request was successful, reloads the page to reflect the change. If not, updates the HTML of the feedback container to display an error message.
 * @function changeAvatarHandler
 * @param {Response} response - The response object returned from the server after attempting to change the user's avatar.
 * @returns {void}
 */
export function changeAvatarHandler(response) {
  const feedbackContainer = document.querySelector(".avatar-feedback");
  if (response.ok) {
    window.location.reload();
  } else if (!response.ok) {
    feedbackContainer.innerHTML = "";
    feedbackContainer.innerHTML += `<div class="text-danger text-center " id="listings-error">
      <p>
      Couldnt change your avatar, please try again.</p>
    </div>`;
  }
}
