// your code goes here

/*FILTER*/

const arr: Array<String> = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filterFn = () => {
  const newArr: Array<String> = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 6) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(filterFn());

/*MAP*/

// const arr = ['spray', 'limit'];

// const mapFn=(arr)=>{
//   let newArr=[]
//   for(let i=0;i<arr.length;i++){
//   newArr.push({"id":i,"name":arr[i]})
//   }
//   return newArr
// }

// mapFn(arr)

/*Find*/

// const arr = [
//   { id: 0, name: 'spray' },
//   { id: 1, name: 'limit' },
// ];
// const id = 1;

// const findItem=(arr,id)=>{
// let obj
// for(let i =0;i<arr.length;i++){
//   if(arr[i].id==id){
//     obj= arr[i]
//   }
// }
// return obj
// }

// findItem(arr,id)

/*CONCAT*/

// const arr1 = ['spray', 'limit', 'elite'];
// const arr2 = ['exuberant', 'destruction', 'present'];

// const concatFn =(arr1,arr2)=>{
// return  [...arr1,...arr2]
// }

// concatFn(arr1,arr2)
/*PIPE*/

// const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

// const pipeFn =(arr)=>{
//   const newArr=[]
//   let result=[]
//   for(let i =0;i<arr.length;i++){
//         if(arr[i].length>6){
//           newArr.push(arr[i])
//         }
//       }

//   for(let i=0;i<newArr.length;i++){
//   result.push({"id":i,"name":newArr[i]})
//   }
//       return result
//     }

// pipeFn(arr)
