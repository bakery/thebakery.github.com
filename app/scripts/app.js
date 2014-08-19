define(["jquery", "marionette", "backbone", "parse", "views/form", "settings", "slick"],
    function($, Marionette, Backbone, Parse, FormView, settings){

        var application = new Backbone.Marionette.Application();

        Parse.initialize(settings.parseApplicationId, settings.parseApplicationKey);

        application.addRegions({
            contactRegion: '#contact-form'
        });


        application.on('start', function(){

            // animate homepage scroll
            $('.down-arrow').click(function(){
                $('html, body').animate({
                     scrollTop: $("#mission").offset().top
                 }, 1200);
            });

            $('.slick-testimonials').slick({
                centerMode: true,
                slidesToShow: 1,
                speed: 600
            });

            // initialize form
            // hack to get around same js on index+skilltide pages       
            if($('#contact-form').length !== 0) {
                var contactView = new FormView();
                application.contactRegion.show(contactView);
            }

        });

        return application;
});