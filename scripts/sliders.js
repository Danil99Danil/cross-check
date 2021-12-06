$(document).ready(function(){
    $('.slider-in-welcome').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        speed: 1000, 
    });
});

$(' .slider-in-welcome').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    document.querySelector("#welcome > div > div.welcome-slider > p.count.slid-pic").innerHTML = "0" + (currentSlide + 1);
})

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3, 
        responsive:[
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
