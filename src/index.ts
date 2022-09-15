// your code goes here

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

console.log(filterFn(arrFilter));

/*MAP*/

const arrMap: Array<String> = ['spray', 'limit'];

const mapFn = (arrMap: Array<String>) => {
  let newArr = [];
  for (let i = 0; i < arrMap.length; i++) {
    newArr.push({ id: i, name: arrMap[i] });
  }
  return newArr;
};

console.log(mapFn(arrMap));

/*Find*/

const arrFind: Array<Object> = [
  { id: 0, name: 'spray' },
  { id: 1, name: 'limit' },
];
const id = 1;

const findItem = (arrFind: Array<Object>, id: number) => {
  let obj;
  for (let i = 0; i < arrFind.length; i++) {
    if (i == id) {
      obj = arrFind[i];
    }
  }
  return obj;
};

console.log(findItem(arrFind, id));

/*CONCAT*/

const arrConcat: Array<String> = ['spray', 'limit', 'elite'];
const arrConcatTwo: Array<String> = ['exuberant', 'destruction', 'present'];

const concatFn = (arr1: Array<String>, arr2: Array<String>) => {
  return [...arrConcat, ...arrConcatTwo];
};

console.log(concatFn(arrConcat, arrConcatTwo));

/*PIPE*/

const arrPipe: Array<String> = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
];

const pipeFn = (arrPipe: Array<String>) => {
  const newArr = [];
  let result = [];
  for (let i = 0; i < arrPipe.length; i++) {
    if (arrPipe[i].length > 6) {
      newArr.push(arrPipe[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    result.push({ id: i, name: newArr[i] });
  }
  return result;
};

console.log(pipeFn(arrPipe));
