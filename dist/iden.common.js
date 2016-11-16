/*
 * iden
 * https://github.com/gamtiq/iden
 *
 * Copyright (c) 2016 Denis Sikuler
 * Licensed under the MIT license.
 */

/**
 * Unique identifier generator.
 * 
 * @module iden
 */

// eslint-disable-next-line lines-around-directive, strict
"use strict";

/* global performance:false */

// eslint-disable-next-line no-new-func

exports.__esModule = true;
exports.getUuid = getUuid;
var globalObj = Function("return this")();

/**
 * Generate unique identifier (UUID as described in RFC 4122 version 4, see https://en.wikipedia.org/wiki/Universally_unique_identifier)
 * and return its value.
 *
 * @param {Object} [settings]
 *     Operation settings. Keys are settings names, values are corresponding settings values.
 *     The following settings are supported (setting's default value is specified in parentheses):
 *     
 *   * `rng`: `Function` (`Math.random`) - random number generator that should be used;
 *      the generator should produce values from [0, 1).
 *   * `shift`: `Boolean, Number` (false) - whether 'shift' should be used when calculating random numbers;
 *      numerical value is used as 'shift' as is; if boolean value `true` is set, then current time is used
 *      to determine a 'shift' value.
 * @return {string}
 *      Generated UUID.
 * @method
 * @alias iden.getUuid
 */
function getUuid(settings) {
    /* eslint-disable no-magic-numbers, prefer-const */
    var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
        result = [
    /* eslint-disable indent */
    // xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    "", "", "", "", "", "", "", "", "-", "", "", "", "", "-", "4", "", "", "", "-", "y", "", "", "", "-", "", "", "", "", "", "", "", "", "", "", "", ""],

    /* eslint-enable indent */
    nL = result.length,
        shift = false,
        bUsualItem = void 0,
        nI = void 0,
        nRandom = void 0,
        randNumGen = void 0,
        sItem = void 0;
    /* eslint-disable no-param-reassign */
    if (!settings) {
        settings = {};
    }
    /* eslint-enable no-param-reassign */
    randNumGen = settings.rng || Math.random;
    /* eslint-enable prefer-const */
    if (settings.shift) {
        if (typeof settings.shift === "number") {
            shift = settings.shift;
        } else {
            shift = new Date().getTime();
            if (globalObj.performance && typeof globalObj.performance.now === "function") {
                shift += performance.now();
            }
        }
    }
    /* eslint-disable no-bitwise, no-magic-numbers */
    for (nI = 0; nI < nL; nI++) {
        sItem = result[nI];
        bUsualItem = sItem === "";
        if (bUsualItem || sItem === "y") {
            if (shift) {
                nRandom = (shift + randNumGen() * 16) % 16 | 0;
                shift = Math.floor(shift / 16);
            } else {
                nRandom = randNumGen() * 16 | 0; // -> integer from [0, 15]
            }
            result[nI] = hex[bUsualItem ? nRandom : nRandom & 0x3 | 0x8]; // ((nRandom & 0x3) | 0x8) -> 8, 9, 10 or 11
        }
    }
    /* eslint-enable no-bitwise, prefer-const */

    return result.join("");
}
//# sourceMappingURL=iden.common.js.map
