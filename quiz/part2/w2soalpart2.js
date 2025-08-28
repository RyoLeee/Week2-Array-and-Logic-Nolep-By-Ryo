// SOAL 1

function palindrome(kata) {
  let backwards = kata.split(``).reverse().join(``);
  if (kata === backwards) {
    return `${kata} is ${true}`;
  } else {
    return `${kata} is ${false}`;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
function angkaPalindrome(num) {
    num++;
    while(true) {
        let palNumb = parseInt(num.toString().split(``).reverse().join(``));
        if (num === palNumb) {
            return num
        }
        num++;
    };
};

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 3
function hitungJumlahKata(kalimat) {
  let sentence = kalimat.split(` `);
  return sentence.length 
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 4
function pasanganTerbesar(num) {
  let sNumb = num.toString();
  let coupArr = [];
  for (let i = 0; i < sNumb.length; i++) {
    let couple = sNumb.slice(i, i + 2);
    coupArr.push(couple);
  }
  let higher = 0;
  for (let j = 0; j < coupArr.length; j++) {
    if (coupArr[j] > higher) {
      higher = coupArr[j];
    }
  }
  return higher
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99