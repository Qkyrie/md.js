(function () {
    'use strict';

    function Mdjs(OPTIONS) {
        if (this instanceof Mdjs) {
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
            if (this.options.debug && typeof console !== 'undefined' && typeof console.log !== 'undefined') {
                return this.options.debug;
            }
        };

        this.liveUpdate = function() {
            if(this.options.liveUpdate) {
                return this.options.liveUpdate;
            }
        };

        this.getInterval = function() {
            if(this.options.interval && parseInt(this.options.interval) === this.options.interval) {
                return this.options.interval;
            } else {
                return 5000;
            }
        };
    }

    Mdjs.prototype = {
        "init": function () {
            var closure = this;
            $(".mdjs").each(function () {
                closure.on($(this));
            });
        },
        "on": function(target) {
            var closure = this;
            var dataFile = target.data("md-file");
            if(dataFile !== undefined && dataFile !== null) {
                $.get(closure.baseUrl() + dataFile, function (data) {
                    closure.log('we got back data for file: ' + dataFile);
                    var converter = new Markdown.Converter();
                    target.html(converter.makeHtml(data));
                    if(closure.liveUpdate()) {
                        setTimeout(function() {
                            closure.on(target);
                        }, closure.getInterval());
                    }
                }).fail(function() {
                    closure.log('something went wrong when fetching ' + dataFile);
                });
            } else {
                closure.log('not using a data file, simple now');
                var converter = new Markdown.Converter();
                target.html(converter.makeHtml(target.html()));
            }
        },
        "log": function() {
            var closure = this;
            if(closure.debug()) {
                console.log.apply(console, arguments);
            }
        }
    };

    try {
        if (exports) {
            exports.Mdjs = Mdjs;
            return;
        }
    } catch (e) {
    }
    try {
        if (module) {
            module.Mdjs = Mdjs;
            return;
        }
    } catch (e) {
    }
    try {
        if (require) {
            define([], function () {
                return Mdjs;
            });
            return;
        }
    } catch (e) {
    }
    try {
        if (window) {
            window.Mdjs = Mdjs;
            return;
        }
    } catch (e) {
    }

})();