(function($){
    "use strict";
    jQuery(document).ready(function($){
        $(".case-study-carosel").owlCarousel({
            items:3,
            margin:30,
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