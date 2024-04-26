document.addEventListener("DOMContentLoaded", function(event) {
    var spans = document.querySelectorAll(".text span");
    var delay = 0.1; // Delay between each span animation
  
    spans.forEach(function(span, index) {
      span.style.animationDelay = index * delay + "s"; // Set animation delay for each span
    });
  });
  