/*FILTER*/

const arrFilter: Array<String> = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filterFn = (arrFilter: Array<String>, num: number) => {
  const newArr: Array<String> = [];
  for (let i = 0; i < arrFilter.length; i++) {
    if (arrFilter[i].length > num) {
      newArr.push(arrFilter[i]);
    }
  }
  return newArr;
};

filterFn(arrFilter, 6);
module.exports = filterFn;
