'use strict';

const _ = require('lodash');
const objPrint = require('./src/');
const asArray = require('as-array');
const feedback = require('feedback');

module.exports = function (data, options) {
    if (isBasicArray(data)) return printBasicArray(data, options);
    if (isArray(data)) return printArrayOfObjects(data, options);
    if (isObject(data)) return printObject(data, options);
};

function printObject(data, options) {
    options = options || {};

    let defaults = {
        leftPadding: 2,
        rightPadding: 2
    };

    _.defaults(options, defaults);

    let keys = _.keys(data);
    let maxKeyLen = _.max(_.map(keys, function (key) {
            return key.length;
        })) + options.rightPadding;

    _.each(keys, function (key) {
        let paddedKey = addPadding(key, maxKeyLen);
        let leftPadding = options.leftPadding;
        let lPad = '';

        while (leftPadding--) {
            lPad += ' ';
        }

        if (_.isArray(data[key]) && data[key].length > 0) {
            let blankKey = key.replace(/./gi, ' '); // used for spacing
            let blankPaddedKey = addPadding(blankKey, maxKeyLen);
            let arr = data[key];

            feedback.info(lPad + paddedKey + JSON.stringify(arr[0]).replace(/^\"|\"$/g, ''));

            for (let i = 1; i < arr.length; i += 1) {
                feedback.info(lPad + blankPaddedKey + JSON.stringify(arr[i]).replace(/^\"|\"$/g, ''));
            }
        }
        else {

            let output = Array.isArray(data[key])
                ? asArray(data[key])
                    .map(function (item) {

                        return JSON.stringify(item).replace(/^\"|\"$/g, '');
                    })
                    .join('')
                : JSON.stringify(data[key]).replace(/^\"|\"$/g, '');


            feedback.info(lPad + paddedKey + output);
        }
    });
}

function printArrayOfObjects(data, options) {
    let defaults = {
        padding: 0,
        leftPadding: 2,
        rightPadding: 2
    };

    _.defaults(options, defaults);

    let maxKeyLen = _.max(_.map(data, function (obj) {
            return obj[options.key].length;
        })) + options.rightPadding;

    _.each(data, function (obj) {
        let objKey = obj[options.key];
        let leftPadding = options.leftPadding;
        let lPad = '';

        if (!objKey) return;

        while (leftPadding--) {
            lPad += ' ';
        }

        let paddedKey = lPad + addPadding(objKey, maxKeyLen);

        if (options.value) paddedKey += obj[options.value];
        feedback.info(paddedKey);
    });
}

function printBasicArray(data, options) {
    let defaults = {
        leftPadding: 2
    };

    let leftPadding = options.leftPadding;
    let lPad = '';

    while (leftPadding--) {
        lPad += ' ';
    }

    _.defaults(options, defaults);

    _.each(data, function (val) {
        feedback.info(lPad + val);
    });
}

function addPadding(key, maxPadding) {
    let padding = _.map(Array.from({length: maxPadding - key.length}), () => ' ');
    return key.split('').concat(padding).join('');
}

function isArrayOfObjects(data) {
    return _.isObject(data[0]) && !_.isArray(data[0]);
}

function isBasicArray(data) {
    return _.isArray(data) && !_.isObject(data[0]);
}

function isArray(data) {
    return _.isArray(data) && isArrayOfObjects(data);
}

function isObject(data) {
    return _.isObject(data) && !_.isArray(data);
}
