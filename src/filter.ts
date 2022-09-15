/*FILTER*/

const arrFilter: Array<String> = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filterFn = (arrFilter: Array<String>) => {
  const newArr: Array<String> = [];
  for (let i = 0; i < arrFilter.length; i++) {
    if (arrFilter[i].length > 6) {
      newArr.push(arrFilter[i]);
    }
  }
  return newArr;
};

filterFn(arrFilter);
module.exports = filterFn;
