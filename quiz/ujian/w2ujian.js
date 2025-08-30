// SOAL 1

function targetTerdekat(arr) {
  if (!arr.includes(`x`) || !arr.includes(`o`)) {
    return 0;
  };
  let postX = [];
  let postO = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `x`) {
        postX.push(i);
    } else if (arr[i] === `o`) {
        postO.push(i);
    };
  }
  let lower = Infinity;
  for (let i of postX) {
    for (let j of postO) {
        let jarak = Math.abs(i - j);
        if (jarak < lower) {
            lower = jarak;
        }
    }
  }
  return lower
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2

function mengelompokkanAngka(arr) {
  let result = [[], [], []];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        result[2].push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
        result[1].push(arr[i]);
    } else {
        result[0].push(arr[i]);
    };
  };
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


console.log(` `);
console.log(` `);
console.log(` `);


function groupAnimals(animals) {
  let result = [];
  let trueArr = animals.sort();
  for (let i = 0; i < trueArr.length; i++) {
    for (let j = 0; j < result.length; j++) {
        if (!result[j].includes(trueArr[i][0])) {
            result.push([trueArr[i]]);
        } else {
            result[j].push(trueArr[i])
        }
    }
  }
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]