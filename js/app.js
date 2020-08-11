function myFunction(event) {
    event.stopPropagation();
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
    document.getElementById("myDropdown").classList.remove("show");
  }
    