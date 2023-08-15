document.addEventListener("DOMContentLoaded", function() {
  var modalContainer = document.getElementById("modal-container");
  var closeButton = document.getElementById("close");
  var modalImage = document.querySelector(".modal-content img");

  function showModal() {
    modalContainer.style.display = "block";
    document.documentElement.style.overflow = "hidden";
  }

  function closeModal() {
    modalContainer.style.display = "none";
    document.documentElement.style.overflow = "auto";
  }

  setTimeout(showModal, 3000);

  modalContainer.addEventListener("click", function(e) {
    if (e.target === modalContainer || e.target === modalImage) {
      closeModal();
    }
  });

  closeButton.addEventListener("click", closeModal);
});