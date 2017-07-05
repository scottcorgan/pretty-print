'use strict';

const _ = require('lodash');
const config = require('./config');
const spaceAfterComma = config.spaceAfterComma ? ' ' : '';

const model = {

    /**
     * this module is designed to print json/object/array like object more readable to viewer.
     * @param obj {array|object}
     * @return {string}
     */
    translate(obj) {
        return model.generateLine(0, obj);
    },
    generateLine(parentDepth, currentObj) {
        let parentSpace = Array.from({length: parentDepth * config.space}).map(() => ' ').join('');
        if (_.isPlainObject(currentObj)) {
            let currentSpaceLength = (parentDepth + 1) * config.space;
            let currentSpace = Array.from({length: currentSpaceLength}).map(() => ' ').join('');
            let keys = Object.keys(currentObj);
            let lines = keys.map(key => {
                let value = currentObj[key];
                if (_.isPlainObject(value)) {
                    return `"${key}":${spaceAfterComma}${model.generateLine(parentDepth + 1, value)}`;
                } else if (_.isArray(value)) {
                    return `"${key}":${spaceAfterComma}[${value.map(val => model.generateLine(parentDepth + 1, val)).join(`,${spaceAfterComma}`)}]`;
                } else if (_.isFunction(value)) {
                    return `"${key}":${spaceAfterComma}Function`;
                } else {
                    return `"${key}":${spaceAfterComma}${model.translate(value)}`;
                }
            }).map(item => `${currentSpace}${item}`);
            return `{\n` + lines.join(',\n') + `\n${parentSpace}}`;
        } else if (_.isArray(currentObj)) {
            return `[${currentObj.map(val => model.generateLine(parentDepth, val)).join(`,${spaceAfterComma}`)}]`;
        } else if (_.isBoolean(currentObj)) {
            return currentObj;
        } else if (_.isNumber(currentObj)) {
            return currentObj;
        } else if (_.isDate(currentObj)) {
            return `"${String(currentObj)}"`;
        } else if (_.isNull(currentObj)) {
            return 'null';
        } else if (_.isUndefined(currentObj)) {
            return 'undefined';
        } else if (_.isString(currentObj)) {
            return `"${String(currentObj)}"`;
        } else if (_.isRegExp(currentObj)) {
            return `new RegExp(${String(currentObj)})`;
        } else {
            return `"${String(currentObj)}"`;
        }
    }
};

module.exports = model;
