// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the form and success message elements
let form = document.getElementById("myForm");
let successMessage = document.getElementById("successMessage");

// When the user clicks the button, open the modal
btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Validate form inputs and handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  // Simple validation: Check if name and email are not empty
  if (name === "" || email === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Display success message
  successMessage.style.display = "block";

  // Optional: You can reset the form after submission
  // form.reset();
});
