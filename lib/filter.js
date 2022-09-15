'use strict';
/*FILTER*/
var arrFilter = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

var filterFn = function (arrFilter, num) {
  var newArr = [];

  for (var i = 0; i < arrFilter.length; i++) {
    if (arrFilter[i].length > num) {
      newArr.push(arrFilter[i]);
    }
  }
  return newArr;
};
filterFn(arrFilter, 4);
module.exports = filterFn;
//# sourceMappingURL=filter.js.map
