/**
 *Toggles the visibility of a loading spinner.
 *@function toggleLoadingIndicator
 *@param {boolean} event - Indicates whether to show or hide the spinner.
 *@returns {void}
 */ export function toggleLoadingIndicator(event) {
  const spinner = document.querySelector(".spinner");
  if (event) {
    spinner.classList.add("d-none");
  } else {
    spinner.classList.remove("d-none");
  }
}
