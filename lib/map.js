"use strict";
/*MAP*/
var arrMap = ['spray', 'limit'];
var mapFn = function (arrMap) {
    var newArr = [];
    for (var i = 0; i < arrMap.length; i++) {
        newArr.push({ id: i, name: arrMap[i] });
    }
    return newArr;
};
mapFn(arrMap);
module.exports = mapFn;
//# sourceMappingURL=map.js.map