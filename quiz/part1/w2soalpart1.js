// SOAL 1
let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (j === 0) {
            console.log(`Nomor ID: ${input[i][j]}`);
        } else if (j === 1) {
            console.log(`Nma Lengkap: ${input[i][j]}`);
        } else if (j === 2) {
            console.log(`TTL: ${input[i][j]} - ${input[i][j + 1]}`);
        } else if (j === 4) {
            console.log(`Hobby: ${input[i][j]}`);
        }
    }
    console.log(` `);
}


console.log(` `);
console.log(` `);
console.log(` `);


// SOAL 2
let data = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(data) {
  data.splice(1, 1, `Roman Alamsyah Elsharawy`);
  data.splice(2, 1, `Provinsi Bandar Lampung`);
  data.splice(4, 0, `Pria`);
  data.splice(5, 1, `SMA Internasional Metro`);
  console.log(data);

  let date = data[3].split('/');
  switch (date[1]) {
    case '01':
        console.log('January');
        break;
    case '02':
        console.log('February');
        break;
    case '03':
        console.log('March');
        break;
    case '04':
        console.log('April');
        break;
    case '05':
        console.log('May');
        break;
    case '06':
        console.log('June');
        break;
    case '07':
        console.log('July');
        break;
    case '08':
        console.log('August');
        break;
    case '09':
        console.log('September');
        break;
    case '10':
        console.log('October');
        break;
    case '11':
        console.log('November');
        break;
    case '12':
        console.log('December');
        break;
    default:
        console.log('Invalid month');
    };
 
 console.log([date[2], date[0], date[1]]);
 console.log(date.join('-'));
 let lastSentc = data[1].slice(0, 15);
 console.log(lastSentc);

};

dataHandling(data);