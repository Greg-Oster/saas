$(window).on('load', function() {
    let textlist = document.querySelectorAll(".header__main-text");

    setTimeout(function(){
        textlist[0].classList.add("header__main-text_animated");
    }, 50);

    setTimeout(function(){
        textlist[1].classList.add("header__main-text_animated");
    }, 400);

    // Выплывание снизу pricing-table
    setTimeout(function(){
        document.querySelector(".pricing-table").classList.add("pricing-animate");
    }, 300);


    $('.h1-description').textillate({ 
        in: { 
        effect: 'fadeInLeft',
        // effect: 'rollIn',
        shuffle: true,
        // sync: true,
        delay: 20 ,
        delayScale: 0.75,
     } });


});