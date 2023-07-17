//first variant
let  number=function(array){
 return array.length <= 0 ? [] : array.map((c, i) => `${i + 1}: ${c}`);
};

// two variant
//  let  number=function(array){
//      let res = [];
//      if(array.length <= 0){
//        return [];
//    }
//    for(let i = 0; i < array.length; i++){
//            res.push(`${i}: ${array[i]}`);
//            console.log(array[i], i);
//        }
//        return res;
//  };