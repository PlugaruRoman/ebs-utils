/*Find*/

const arrFind: Array<Object> = [
  { id: 0, name: 'spray' },
  { id: 1, name: 'limit' },
];
const id = 1;

const findItemFn = (arrFind: Array<Object>, id: number) => {
  let obj = {};
  for (let i = 0; i < arrFind.length; i++) {
    if (i == id) {
      obj = arrFind[i];
    }
  }
  return obj;
};

findItemFn(arrFind, id);
module.exports = findItemFn;
