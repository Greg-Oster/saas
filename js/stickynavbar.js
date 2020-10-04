window.addEventListener("scroll", function(){
    let navbar = document.querySelector("#navigation");

    navbar.classList.toggle("sticky", window.scrollY > 0);

    if($(window).scrollTop() >= $('#support-center-section').offset().top){
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
})