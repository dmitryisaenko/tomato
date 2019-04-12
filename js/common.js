
$(document).ready(function(){
    $('#owl_first').owlCarousel({
        margin:1,
        loop:true,
        autoWidth:true,
        items:2,
        autoplay:true,
        autoplaySpeed: 1000,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

    $('#owl_second').owlCarousel({
        margin:1,
        loop:true,
        autoWidth:true,
        items:2,
        autoplay:true,
        autoplaySpeed: 1000,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

    $('#owl_third').owlCarousel({
        margin:1,
        loop:true,
        autoWidth:true,
        stagePadding: 22,
        nav:true,
        items:4,
        navText: [$('.controls_left_third'),$('.controls_right_third')]
    });

    $('#owl_fourth').owlCarousel({
        margin:1,
        loop:true,
        autoWidth:true,
        nav:true,
        dots: false,
        stagePadding: false,
        items:3,
        navText: [$('.controls_left_fourth'),$('.controls_right_fourth')]
    });
  });