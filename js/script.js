const overlay_layer = document.querySelector('.section-overlay');
const btn_overlay = document.querySelector('.portfolio .image-content .img-card .img-overlay .text-link');
const btn_close = document.querySelector('.portfolio .image-content .img-card .section-overlay .close'); 
const card_overlay = document.querySelector('.portfolio .image-content .img-card .section-overlay .card-content');

btn_overlay.addEventListener('click', function() {
    overlay_layer.classList.add('show');
    overlay_layer.addEventListener('click', function(e) {
        if( e.target.className == 'section-overlay show' ) {
            overlay_layer.classList.remove('show');
        }
    })
});

btn_close.addEventListener('click', function() {
    overlay_layer.classList.remove('show');
});