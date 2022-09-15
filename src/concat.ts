/*CONCAT*/

const arrConcat: Array<String> = ['spray', 'limit', 'elite'];
const arrConcatTwo: Array<String> = ['exuberant', 'destruction', 'present'];

const concatFn = (arr1: Array<String>, arr2: Array<String>) => {
  return [...arrConcat, ...arrConcatTwo];
};

concatFn(arrConcat, arrConcatTwo);
module.exports = concatFn;
