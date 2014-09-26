(function () {
    'use strict';

    function Mdjs(OPTIONS) {
        if (this instanceof mdjs) {
            this.options = OPTIONS || {};
        } else {
            return new Mdjs(OPTIONS);
        }

        this.baseUrl = function () {
            if (this.options.baseUrl) {
                return this.options.baseUrl;
            } else {
                return "assets/md/";
            }
        };

        this.debug = function () {
            if (this.options.debug) {
                return this.options.debug;
            }
        };
    }

    mdjs.prototype = {
        "init": function () {
            var closure = this;
            $(".mdjs").each(function () {
                var target = $(this);
                $.get(closure.baseUrl() + $(this).data("md-file"), function (data) {
                    if (closure.debug()) {
                        console.log('got file for target');
                    }
                    var converter = new Markdown.Converter();
                    target.html(converter.makeHtml(data));
                });
            });
        }
    };

    try {
        if (exports) {
            exports.mdjs = mdjs;
            return;
        }
    } catch (e) {
    }
    try {
        if (module) {
            module.mdjs = mdjs;
            return;
        }
    } catch (e) {
    }
    try {
        if (require) {
            define([], function () {
                return mdjs;
            });
            return;
        }
    } catch (e) {
    }
    try {
        if (window) {
            window.mdjs = mdjs;
            return;
        }
    } catch (e) {
    }

})();