$(function () {
    $(".code").hover(function(){
    	$(this).prev().children("img").css("opacity","0.4")
    },function(){
    	$(this).prev().children("img").css("opacity","1")
    });
    

  
      
});