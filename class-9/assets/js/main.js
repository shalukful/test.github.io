(function($){
    "use strict";
    jQuery(document).ready(function($){
        $(".homepage-3-slide").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:true,
            navText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"],
        });
        
        $(".clients-company-carousel").owlCarousel({
            items:6,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
        });
        
        $(".case-study-carosel").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
        });
        $(".case-study-carosel-22").owlCarousel({
            items:5,
            loop:true,
            dots:true,
            nav:false,
        });
        
        
        $(".testimonial-carosel").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
            
        });
        
        
        
        
    });
    
    
    jQuery(window).load(function(){
        
        
    });
    
    
}(jQuery));