let animation = bodymovin.loadAnimation({
    container: document.getElementById('header-animation'),
    
    renderer: 'svg', // canvas or svg
    loop: true,
    autoplay: true,
    path: './js/animation-header.json'

})