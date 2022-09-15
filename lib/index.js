"use strict";
// your code goes here
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*FILTER*/
var arrFilter = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
];
var filterFn = function (arrFilter) {
    var newArr = [];
    for (var i = 0; i < arrFilter.length; i++) {
        if (arrFilter[i].length > 6) {
            newArr.push(arrFilter[i]);
        }
    }
    return newArr;
};
console.log(filterFn(arrFilter));
/*MAP*/
var arrMap = ['spray', 'limit'];
var mapFn = function (arrMap) {
    var newArr = [];
    for (var i = 0; i < arrMap.length; i++) {
        newArr.push({ id: i, name: arrMap[i] });
    }
    return newArr;
};
console.log(mapFn(arrMap));
/*Find*/
var arrFind = [
    { id: 0, name: 'spray' },
    { id: 1, name: 'limit' },
];
var id = 1;
var findItem = function (arrFind, id) {
    var obj;
    for (var i = 0; i < arrFind.length; i++) {
        if (i == id) {
            obj = arrFind[i];
        }
    }
    return obj;
};
console.log(findItem(arrFind, id));
/*CONCAT*/
var arrConcat = ['spray', 'limit', 'elite'];
var arrConcatTwo = ['exuberant', 'destruction', 'present'];
var concatFn = function (arr1, arr2) {
    return __spreadArrays(arrConcat, arrConcatTwo);
};
console.log(concatFn(arrConcat, arrConcatTwo));
/*PIPE*/
var arrPipe = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
];
var pipeFn = function (arrPipe) {
    var newArr = [];
    var result = [];
    for (var i = 0; i < arrPipe.length; i++) {
        if (arrPipe[i].length > 6) {
            newArr.push(arrPipe[i]);
        }
    }
    for (var i = 0; i < newArr.length; i++) {
        result.push({ id: i, name: newArr[i] });
    }
    return result;
};
console.log(pipeFn(arrPipe));
//# sourceMappingURL=index.js.map