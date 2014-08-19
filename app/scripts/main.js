/*
    Require setup + entry point for the application
    This hybrid setup allows us to use 1 single config file across
    both runtime and test environment  
*/

function testing(){
    return typeof window.__karma__ !== 'undefined';
}

// TODO: add parse

require.config({
    baseUrl : "scripts/",
 
    shim: {
        'underscore' : {exports: '_' },
        'backbone' : {exports: 'Backbone', deps: ['underscore']},
        'backbone.wreqr' : { deps : ['backbone']},
        'backbone.babysitter' : { deps : ['backbone']},
        'marionette' : { deps : ['backbone']},
        'json' : {exports: 'JSON'},
        'handlebars' :  {exports: 'Handlebars'},
        'parse' : {exports: 'Parse'},
        'jquery-validation' : {deps: ['jquery']},
        'slick' : {deps: ['jquery']}
    },

    paths: {
        jquery: 'vendor/jquery/jquery',
        'jquery-validation': 'vendor/jquery-validation/jquery.validate',
        'slick' : 'lib/slick',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        'backbone.wreqr' : 'vendor/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter' : 'vendor/backbone.babysitter/lib/backbone.babysitter',
        text : 'vendor/requirejs-text/text',
        json : 'vendor/json2/json2',
        handlebars : 'vendor/handlebars/handlebars',
        parse : 'parse/parse',
        templates: '../templates'
    }
});

if (!testing()){
    require(['app'], function(Application) {
        Application.start();
    });
} else {
    var tests = [];
    for (var file in window.__karma__.files) {
        if (/specs\/.*\.js$/.test(file)) {
            tests.push(file);
        }
    }

    require.config({
        baseUrl : "/base/app/scripts",
        // ask Require.js to load these files (all our tests)
        deps : tests,
        // start test run, once Require.js is done
        callback : window.__karma__.start
    });
}