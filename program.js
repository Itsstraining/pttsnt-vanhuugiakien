/**
 * 
 * @param {number} max 
 */
function checkSNT(max) {
  if (max <= 2) {
      return false;
  }
  for (let i = 2; i < max - 1; i++) {
      if (max % i == 0) {
          return false;
      }
  }
  return true;
}
/**
* 
* @param {number} max 
*/
function songuyento(max) {
  let res = [2];
  for (let i = 0; i < max + 1; i++) {
      if (checkSNT(i)) {
          res.push(i);
      }
  }
  return res;
}
let n;
let res = [];
/**
* 
* @param {number} n 
*/
function convert(n) {
  if (n <= 1) {
      res.push(n)
      return res;
  } else {
      let arrSNT = songuyento(n);

      for (let i = 0; i < arrSNT.length - 1; i++) {
          if (n == arrSNT[i + 1]) {
              res.push(arrSNT[i + 1]);
              return res;
          } else {
              if (n % arrSNT[i] == 0) {
                  if (n != arrSNT[i]) {
                      res.push(arrSNT[i]);
                      n = n / arrSNT[i];
                      convert(n);
                  }
                  return res;
              }
          }
      }
      res.push(n)
  }
}
function convertSuper(n){
  if(n<=1){
      res.push(n);
      return res;
  }

}
function main(input) {
  input = parseInt(input)
  let a = convert(input).join(" ");
  console.log(a);
  res = [];
}
module.exports = main;