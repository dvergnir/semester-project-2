/**
 * Renders the user's profile data onto the HTML document.
 * @function renderProfile
 * @param {Object} profile - The user's profile data, including their name, avatar URL, and credit balance.
 * @returns {void}
 */
export function renderProfile(profile) {
  const container = document.createElement("div");
  const profileContainer = document.querySelector(".profile-container");

  container.innerHTML = `<div class="mt-5 d-flex align-items-center justify-content-center flex-column">
  <p class="logged-in-user text-primary text-center"></p>
    <img class="avatar d-block"
    src="" onerror="this.onerror=null;this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
    alt="user"/>
    <a class="change-avatar d-block" data-bs-toggle="modal"
    data-bs-target="#avatarModal">Change avatar</a>
  </div><p class="credits display-7 text-primary text-center mt-2"></p>
  `;
  container.querySelector("img").src = profile.avatar;
  container.querySelector(".credits").innerText = "Credits: " + profile.credits;
  container.querySelector(".logged-in-user").innerText =
    "Logged in as: " + profile.name;

  profileContainer.append(container);
}
