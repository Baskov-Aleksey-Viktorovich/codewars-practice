//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript
//Example(Input => Output):

function digitize(n) {
    let strArr = n.toString().split('').reverse();
    let res = [];
    for(let i = 0; i < strArr.length; i++){
        res.push(parseInt(strArr[i]));
    }
    return res;
  }