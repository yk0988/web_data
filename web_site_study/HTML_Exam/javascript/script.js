// JavaScript Document

jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    $('.imgslider a:gt(0)').hide();
    setInterval(function(){
        $('.imgslider a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.imgslider');
    },3000);  
  
    $(".notice li:first").click(function(){
      $("#modal").addClass("active");
    });
    $(".btn").click(function(){
      $("#modal").removeClass("active");
    });    
         
  });
      
  
  
  
  