window.addEventListener('DOMContentLoaded', (event) => {
  let toggleNav = document.getElementById('toggleNav');
  let drawerMenu = document.getElementById('drawerMenu');
  let draewrMenuClose = document.querySelector('#drawerMenu svg');
  let offCanvas = document.getElementById('overlay')
  
  toggleNav.onclick = function() {
    drawerMenu.classList.toggle("slideOut");

    if (offCanvas.style.display == 'flex') {
      offCanvas.style.display = 'none';
    } else {
      offCanvas.style.display = 'flex';
    }
  }

  draewrMenuClose.onclick = function() {
    drawerMenu.classList.add("slideOut");
    offCanvas.style.display = "none";
  }

  offCanvas.onclick = function() {
    drawerMenu.classList.add("slideOut");
    offCanvas.style.display = "none";
  }
});