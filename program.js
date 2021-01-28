/**
 * 
 * @param {number} max 
 */
function checkSNT(max) {
  if (max < 2) {
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
// console.log(checkSNT(2));
function songuyento(max) {
  let res = [];
  for (let i = 0; i < max + 1; i++) {
    if (checkSNT(i)) {
      res.push(i);
    }
  }
  return res;
}
// console.log(songuyento(5))
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
function convertSuper(n) {
  if (n <= 1) {
    res.push(n);
    return res;
  } else {
    for (let i = 0; i < n + 1; i++) {
      if (checkSNT(i)) {
        if (n % i == 0) {
          if (n == i) {
            res.push(i);
            return res
          } else {
            res.push(i);
            n = n / i;
            convertSuper(n)
          }
        }
      }
    }
    return res;

  }

}
console.log(convertSuper(12345))
function main(input) {
  input = parseInt(input)
  let a = convertSuper(input).join(" ");
  console.log(a);
  res = [];
}
module.exports = main;