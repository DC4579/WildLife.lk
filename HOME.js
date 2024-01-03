window.onload = function() {
    document.getElementById("menuToggle").addEventListener("click", function() {
      var x = document.getElementById("myTopnav");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    });
  };