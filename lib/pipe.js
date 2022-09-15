"use strict";
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
pipeFn(arrPipe);
module.exports = pipeFn;
//# sourceMappingURL=pipe.js.map