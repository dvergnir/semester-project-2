import { register } from "./../api/register.mjs";
import { API_REG_URL } from "./../constants/constants.mjs";
/**
 * function to retrieve values from a form and sends a HTTP POST request to the server
 * the request contains a object that is created from the form.
 * @example
 * ```js
 * // call the function
 * registerUser();
 * ```
 */
export function registerUser() {
  const form = document.querySelector("#reg-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const email = formData.email.value;
    const name = formData.name.value;
    const password = formData.password.value;
    const avatar = formData.avatar.value;
    const user = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };
    register(API_REG_URL, user, method);
  });
}
