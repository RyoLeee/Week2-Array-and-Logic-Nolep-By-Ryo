// SOAL 1

function cariMean(arr) {
  let length = arr.length;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let result = total / length;
  return Math.round(result);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2

function perkalianUnik(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 1;
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            total *= arr[j];
        };
    };
    result.push(total);
  };
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3

function tentukanDeretAritmatika(arr) {
  let jarak = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) !== jarak) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4

function tentukanDeretGeometri(arr) {
  let geometri = arr[1] / arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== geometri) {
      return false;
    }
  }
  return true;
};

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false