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

pipeFn(arrPipe);
module.exports = pipeFn;
