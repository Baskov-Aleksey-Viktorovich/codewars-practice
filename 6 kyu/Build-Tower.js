/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this: */
function towerBuilder(nFloors) {
    let arr    = [];
    let dis    = (nFloors * 2) - 1;
    let center =  Math.floor(dis / 2);
    let str    = '';

    for(let i = 0; i < nFloors; i++){
        str = '';
    for(let j = 0; j < dis; j++){

      if(j < center -  i){
          str += ' ';
        }
        else if(j > center + i ){
            str += ' '
        }
                else{
        str += '*'
        }   
    }
    arr.push(str)
  }
  return arr
}