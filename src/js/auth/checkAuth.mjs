export function checkAuthorization() {
  const path = window.location.pathname;
  const token = storage.load("accessToken");
  if ((!token && path === "./index.html") || path === "/index.html") {
    window.location.replace("/authorization/login/index.html");
  } else if (!token && path === "/home/auction/index.html") {
    window.location.replace("/authorization/login/index.html");
  } else if (!token && path === "/profile/index.html") {
    window.location.replace("/authorization/login/index.html");
  }
  if ((path === "/" || path === "/index.html") && token) {
    window.location.replace("/home/index.html");
  }
}
