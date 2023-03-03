/**
 * Sets up a "back to top" button and toggles its visibility based on the user's scroll position.
 * When clicked, the button scrolls the page back to the top.
 * @function scrollToTop
 * @returns {void}
 */
export function scrollToTop() {
  const btnTop = document.getElementById("btn-back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  /**
   * Toggles the visibility of the "back to top" button based on the user's scroll position.
   * @function scrollFunction
   * @returns {void}
   */
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }

  btnTop.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
