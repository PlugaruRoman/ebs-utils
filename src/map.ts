/*MAP*/

const arrMap: Array<String> = ['spray', 'limit'];

const mapFn = (arrMap: Array<String>) => {
  let newArr = [];
  for (let i = 0; i < arrMap.length; i++) {
    newArr.push({ id: i, name: arrMap[i] });
  }
  return newArr;
};

mapFn(arrMap);
module.exports = mapFn;
