/**
 * @file classnames
 * @author 52cik
 * @email fe.52cik@gmail.com
 */

(function (prototype) {
    'use strict';

    var toString = prototype.toString;
    var hasOwn = prototype.hasOwnProperty;

    var utils = {
        'parse': function (resultSet, arg) {
            var type;

            if (!arg) { return; }

            type = toString.call(arg);
            utils[type] && utils[type](resultSet, arg);
        },
        '[object Array]': function (resultSet, arg) {
            var i = 0;
            var len = arg.length;

            for (; i < len; i++) {
                utils.parse(resultSet, arg[i]);
            }
        },
        '[object Object]': function (resultSet, arg) {
            var k;

            for (k in arg) {
                if (hasOwn.call(arg, k)) {
                    resultSet[k] = arg[k];
                }
            }
        },
        '[object String]': function (resultSet, arg) {
            var i = 0;
            var arr = arg.split(/\s+/);
            var len = arr.length;

            for (; i < len; i++) {
                resultSet[arr[i]] = true;
            }
        },
        '[object Number]': function (resultSet, arg) {
            resultSet[arg] = true;
        }
    };

    function classNames() {
        var k;
        var list = [];
        var classSet = {};

        utils['[object Array]'](classSet, arguments);

        for (k in classSet) {
            if (hasOwn.call(classSet, k) && classSet[k]) {
                list.push(k);
            }
        }

        return list.join(' ');
    }

    /* istanbul ignore next */
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = classNames;
    } else if (typeof define === 'function') {
        define('classnames', [], function () { return classNames; });
    } else {
        window.classNames = classNames;
    }
})(Object.prototype);
