define(["jquery", "marionette", "models/contact", "text!./form.html", "jquery-validation" ],
 function($, Marionette, Contact, template){

    var FormView = Backbone.Marionette.ItemView.extend({
        
        tagName: 'form',
        template: _.template(template),
    
        onRender : function(){
            $(this.el).validate({
                submitHandler: _.bind(this.__submitHandler, this)
            });

            console.log('this is happening right?');
        },

        onSubmit : function(fields){
            this.$("input[type='submit']").addClass("hidden");
            this.$(".submitting").removeClass("hidden");
            
            $.when(Contact.create(fields))
            .done(_.bind(this.onSuccess,this))
            .fail(_.bind(this.onError,this));
        },

        onSuccess : function(company){
            console.log('success');
            //show success message
            this.$(".submitting").addClass("hidden");
            this.$(".thank-you").removeClass("hidden");
        },

        onError : function(){
            console.log('error');
            //show error message
            this.$("input[type='submit']").removeClass("hidden");
            this.$(".error-message").removeClass("hidden");
        },

        __submitHandler : function(form){
            // serialize form fields into array
            var formData = $(form).serializeArray();
            var result = {};

            _.each(formData, function(field){
                if(!result[field.name]){
                    result[field.name] = field.value;
                } else {
                    if(_.isArray(result[field.name])){
                        result[field.name].push(field.value);
                    } else {
                        result[field.name] = [field.value];
                    }
                }
            });

            this.onSubmit(result);
        }
    });

    return FormView;

});