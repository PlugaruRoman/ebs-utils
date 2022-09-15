'use strict';
/*Find*/
var arrFind = [
  { id: 0, name: 'spray' },
  { id: 1, name: 'limit' },
];
var id = 1;
var findItemFn = function (arrFind, id) {
  var obj;
  for (var i = 0; i < arrFind.length; i++) {
    if (i == id) {
      obj = arrFind[i];
    }
  }
  return obj;
};
console.log(findItemFn(arrFind, id));
module.exports = findItemFn;
//# sourceMappingURL=find.js.map
