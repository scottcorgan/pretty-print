var _ = require('lodash');
var feedback = require('feedback');

var print = module.exports = function (data, options) {
  if (isBasicArray(data)) return printBasicArray(data, options);
  if (isArray(data)) return printArrayOfObjects(data, options);
  if (isObject(data)) return printObject(data, options);
};

function printObject (data, options) {
  var defaults = {
    padding: 0
  };
  
  _.defaults(options, defaults);
  
  if (options) {
    padding = options.padding || 0;
  }
  
  var keys = _.keys(data);
  var maxKeyLen = _.max(_.map(keys, function (key) {
    return key.length;
  })) + options.padding;
  
  _.each(keys, function (key) {
    var paddedKey = addPadding(key, maxKeyLen);
    feedback.info('  ' + paddedKey.bold + JSON.stringify(data[key]).replace(/^\"|\"$/g, ''));
  });
}

function printArrayOfObjects (data, options) {
  var defaults = {
    padding: 0
  };
  
  _.defaults(options, defaults);
  
  var maxKeyLen = _.max(_.map(data, function (obj) {
    return obj[options.key].length;
  })) + options.padding;
  
  _.each(data, function (obj) {
    var objKey = obj[options.key];
    if (!objKey) return;
    
    var paddedKey = '  ' + addPadding(objKey, maxKeyLen).bold;
    
    if (options.value) paddedKey += obj[options.value];
    feedback.info(paddedKey);
  });
}

function printBasicArray (data, options) {
  var defaults = {};
  
  _.defaults(options, defaults);
  
  _.each(data, function (val) {
    feedback.info('  ' + val);
  });
};

function addPadding (key, maxPadding) {
  var padding = _.map(Array(maxPadding - key.length), function () { return ' '; });
  return key.split('').concat(padding).join('');
}

function isArrayOfObjects (data) {
  return _.isObject(data[0]) && !_.isArray(data[0]);
}

function isBasicArray (data) {
  return _.isArray(data) && !_.isObject(data[0]);
}

function isArray (data) {
  return _.isArray(data) && isArrayOfObjects(data);
}

function isObject(data) {
  return _.isObject(data) && !_.isArray(data);
}