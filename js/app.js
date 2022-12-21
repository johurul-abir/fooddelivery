

jQuery(document).ready(function($) {

    //slider code

    $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },

            990:{
                items:3
            }
        }
    });

    // counterup code

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // menu button toggle js code //

    $(".menu_row_3").hide();
    $("#product_btn").click(function(){
        $(".menu_row_3").toggle(1000);
    })
});

//animation code

AOS.init({
    delay: 50,
    duration: 1500,
});



document.querySelector("#product_btn p").innerHTML="See All Menu"
function myFunction() { 

    if (document.querySelector("#product_btn p").innerHTML=="See All Menu") {
        
       document.querySelector ("#product_btn p").innerHTML="Less Menu"
       document.querySelector ("#product_btn i").style.transform = "rotate(180deg)"
       document.querySelector ("#product_btn i").style.transition = "1s"

    } else {
        document.querySelector("#product_btn p").innerHTML="See All Menu"
        document.querySelector ("#product_btn i").style.transform = "rotate(0deg)"
    }

  };

