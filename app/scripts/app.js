define(["jquery"],function($){

    return {
        run : function(){
            $(document).ready(function(){

                $('.down-arrow').click(function(){
                    console.log("test "+ $("#mission").offset().top);
                    $('html, body').animate({
                         scrollTop: $("#mission").offset().top
                     }, 1200);
                });

            });
        }
    };

});