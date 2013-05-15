(function() {
    var config = {
        require: {
            shim: {
                jquery: { exports: '$' },
                underscore: { exports: '_' }
            },
            paths: {
                jquery: 'vendor/jquery/jquery',
                underscore: 'vendor/lodash/lodash',
                postal: 'vendor/postaljs/lib/postal.min',
                diagnostics: 'vendor/postaljs.diagnostics/lib/postal.diagnostics'
            }
        },
        debug: false
    };

    require.config( config.require );

    define(['module','underscore','jquery','postal'], function ( module, _, $, postal ) {
        var base =  {};

        base.bus = postal;

        return base;
    });

}());
