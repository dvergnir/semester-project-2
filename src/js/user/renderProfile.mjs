export function renderProfile(profile) {
  const container = document.createElement("div");
  const profileContainer = document.querySelector(".profile-container");

  container.innerHTML = `<p class="logged-in-user text-primary text-center"></p><div class="d-flex justify-content-center mt-5">
    <a class="change-avatar d-block" data-bs-toggle="modal"
    data-bs-target="#avatarModal">Change avatar</a>
    <img class="avatar"
    src="" onerror="this.onerror=null;this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
    alt="user"/>
    <a class="sign-out d-block">Sign out</a>
  </div><p class="credits display-7 text-primary text-center mt-2"></p>
  `;
  container.querySelector("img").src = profile.avatar;
  container.querySelector(".credits").innerText = "Credits: " + profile.credits;
  container.querySelector(".logged-in-user").innerText =
    "Logged in as: " + profile.name;

  profileContainer.append(container);
}
