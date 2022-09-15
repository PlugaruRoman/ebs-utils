"use strict";
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
filterFn(arrFilter);
module.exports = filterFn;
//# sourceMappingURL=filter.js.map