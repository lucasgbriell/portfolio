$(function(){   
    var nav = $('#nav');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > $(window).height()*0.85) { 
            nav.addClass("fixar"); 
        } else { 
            nav.removeClass("fixar"); 
        } 
    });  
});

$("span").click(function(){
    var ul = $('#opNavbar');
    ul.addClass("navDisplay");
});