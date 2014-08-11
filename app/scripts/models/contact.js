define(["jquery","underscore","parse"], function($,_,Parse){

    var Contact = Parse.Object.extend("Contact");

    return {
        create : function(fields){
            var contact = new Contact();
            var dfd = $.Deferred();
            _.each(_.keys(fields), function(k){
                contact.set(k,fields[k]);
            });
            contact.save({
                success : function(){
                    dfd.resolve();
                },
                error : function(){
                    dfd.reject();
                }
            });
            return dfd.promise();
        }
    };
});