

// Actual HTML

/*

<div class="accordeon__item">

  <div class="accordeon__item-toggle">
    <h5 class="accordeon__item-toggle-header">Who can open a Ghost.io account?</h5>
    <span class="material-icons">add_circle_outline</span>
  </div>

  <article class="accordeon__item-content">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus expedita rem vero quod, veritatis aut!</p>
  </article>

</div>

*/

var acc = document.getElementsByClassName("accordeon__item-toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordeon__item-toggle_active");

    var icon = this.children[1];

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.opacity = 0;
        icon.innerText = "add_circle_outline";
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = 1;
        icon.innerText = "remove_circle_outline";
    }
  });
}

// Toggling nav menu
var navBar = document.getElementsByClassName("navbar")[0];
var nav = document.getElementById("nav-toggle");
var navIcon = nav.children[0];

nav.addEventListener("click", function(){
  navBar.classList.toggle("navbar-open");

  if(navIcon.innerText == "close"){
    navIcon.innerText = "menu";
  } else {
    navIcon.innerText = "close";
  }
});