/*! decoratejs v0.0.1 - MIT license */

'use strict';

/**
 * Module dependencies
 */

/* ------------------- */


function throwUnimplementedException(namein) {
    throw {
        name: namein,
        message: 'Unimplemented method'
    };
}

function Profiler() {
    this.start  = function () { throwUnimplementedException('start in Profiler'); };
    this.report = function () { throwUnimplementedException('report in Profiler'); };
}

function DateTimeProfiler() {
    this.starttime = (new Date()).getTime();
    this.start = function () { this.starttime = (new Date()).getTime(); };
    this.report = function () { return ((new Date()).getTime() - this.starttime); };
}

DateTimeProfiler.prototype = Object.create(Profiler.prototype);

function ConsoleProfiler() {
    this.id = 0;
    this.start  = function () { console.time(this.id); };
    this.report = function () { return console.timeEnd(this.id); };
}

ConsoleProfiler.prototype = Object.create(Profiler.prototype);

function Logger() {
    this.log = function (whattolog) { throwUnimplementedException('log in Profiler'); };
}

function ConsoleLogger() {
    this.log = function (whattolog) { console.log(whattolog); };
}

ConsoleLogger.prototype = Object.create(Profiler.prototype);

var profiler = new DateTimeProfiler();
var logger   = new ConsoleLogger();

function profileWrapper(obj, prop) {
    return (function (args) {
               var retval = undefined;
               profiler.start();
               retval = obj[prop].apply(obj, arguments);
               logger.log('Time taken in \'' + prop + '\' : ' + profiler.report() + 'ms');
               return retval;
           });
}

function logWrapper(obj, prop) {
    return function (args) {
               logger.log('Executing \'' + prop + '\'');
               return obj[prop].apply(obj, arguments);
           };
}

/**
 * @param {}
 * @return {}
 * @api public
 */
function profilableMixin(obj) {
    var newObj = {};
    for (var prop in obj) {
        if (typeof obj[prop] === 'function') {
            newObj[prop] = profileWrapper(obj, prop);
        } else {
            newObj[prop] = obj[prop];
        }
    }
    newObj.prototype = obj;
    return newObj;

}

function loggableMixin(obj) {
    var newObj = {};
    for (var prop in obj) {
        if (typeof obj[prop] === 'function') {
            newObj[prop] = logWrapper(obj, prop);
        } else {
            newObj[prop] = obj[prop];
        }
    }
    newObj.prototype = obj;
    return newObj;
}

function createInterface(arrayofnames) {
    var newobj = {};
    var nameIdx = 0;
    for (;nameIdx < arrayofnames.length; ++nameIdx) {
        var name = arrayofnames[nameIdx];
        if (name in newobj) { continue; }
        newobj[name] = (function () {
                            throwUnimplementedException(name);
                        });
    }
    return newobj;
}

/**
 * Module exports
 */
module.exports = {
    createinterface: createInterface,
    loggable  : loggableMixin,
    profilable: profilableMixin
};
