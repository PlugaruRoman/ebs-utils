"use strict";
/*CONCAT*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arrConcat = ['spray', 'limit', 'elite'];
var arrConcatTwo = ['exuberant', 'destruction', 'present'];
var concatFn = function (arr1, arr2) {
    return __spreadArrays(arrConcat, arrConcatTwo);
};
concatFn(arrConcat, arrConcatTwo);
module.exports = concatFn;
//# sourceMappingURL=concat.js.map