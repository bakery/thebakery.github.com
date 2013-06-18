define(["jquery"],function($){

    return {
        run : function(){
            $(document).ready(function(){

                $('.down-arrow').click(function(){
                    $('html, body').animate({
                         scrollTop: $("#mission").offset().top
                     }, 1200);
                });

            });
        }
    };

});