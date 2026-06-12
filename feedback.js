// Waits for the browser document parameters to lock down cleanly before running script assets
document.addEventListener("DOMContentLoaded", function () {  
  
    document.getElementById("contactForm").addEventListener("submit", function(event) {  
        event.preventDefault();  /* Stops the page from breaking out or hard-reloading */
     
        alert("Your Sam's Vanity feedback inquiry has been submitted successfully!");  
     
        this.reset(); /* Empties form entries automatically after confirmation alert */
    });  
     
});