export function toggleLoadingIndicator(event) {
  const toggleLoadingIndicator = document.querySelector(
    ".toggleLoadingIndicator"
  );
  if (event) {
    toggleLoadingIndicator.classList.add("d-none");
  } else {
    toggleLoadingIndicator.classList.remove("d-none");
  }
}
