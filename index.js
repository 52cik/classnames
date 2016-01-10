(function (prototype) {
  var toString = prototype.toString;
  var hasOwn = prototype.hasOwnProperty;

  var utils = {
    parse: function (resultSet, arg) {
      if (!arg) return;

      var type = toString.call(arg);
      utils[type] && utils[type](resultSet, arg);
    },
    '[object Array]': function (resultSet, arg) {
      for (var i = 0, len = arg.length; i < len; i++) {
        utils.parse(resultSet, arg[i]);
      }
    },
    '[object Object]': function (resultSet, arg) {
      for (var k in arg) {
        if ( hasOwn.call(arg, k) ) {
          if ( arg[k] ) {
            resultSet[k] = true;
          } else {
            delete resultSet[k];
          }
        }
      }
    },
    '[object String]': function (resultSet, arg) {
      var arr = arg.split(/\s+/);

      for (var i = 0, len = arr.length; i < len; i++) {
        resultSet[arr[i]] = true;
      }
    },
    '[object Number]': function (resultSet, arg) {
      resultSet[arg] = true;
    }
  };

  function classNames () {
    var list = [];
    var classSet = {};

    utils['[object Array]'](classSet, arguments);

    for (var k in classSet) {
      if (hasOwn.call(classSet, k) && classSet[k]) {
        list.push(k);
      }
    }

    return list.join(' ');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = classNames;
  } else if (typeof define === 'function' && define.amd ) {
    define('classnames', [], function () { return classNames });
  } else {
    window.classNames = classNames;
  }
})(Object.prototype);