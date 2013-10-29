require('colors');
var _ = require('lodash');

var prettyPrint = {
  object: function (obj, extraPadding) {
    extraPadding = extraPadding || 0;
    
    var keys = _.keys(obj);
    var maxKeyLen = _.max(_.map(keys, function (key) {
      return key.length;
    })) + extraPadding;
    
    _.each(keys, function (key) {
      var paddedKey = prettyPrint._addPadding(key, maxKeyLen);
      console.log('  ' + paddedKey.bold + JSON.stringify(obj[key]));
    });
  },
  
  array: function (arr, key, value, extraPadding) {
    extraPadding = extraPadding || 0;
    
    var maxKeyLen = _.max(_.map(arr, function (obj) {
      return obj[key].length;
    })) + extraPadding;
    
    _.each(arr, function (obj) {
      var objKey = obj[key];
      if (!objKey) return;
      
      var paddedKey = prettyPrint._addPadding(objKey, maxKeyLen);
      console.log('  ' + paddedKey.bold + obj[value]);
    });
  },
  
  _addPadding: function (key, maxPadding) {
    var padding = _.map(Array(maxPadding - key.length), function () { return ' '; });
    return (key + ':').split('').concat(padding).join('');
  }
};

module.exports = prettyPrint;