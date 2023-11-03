// 1. Fungsi untuk membuat array dengan 100 nilai acak antara 1 hingga 50
function setRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}
// menjalankan array acak
const randomArray = setRandomArray();
console.log("Random Array dimulai dari Index 0:", randomArray);

// 2. Fungsi untuk memecah array menjadi array genap dan ganjil
function splitArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  return { evenArray, oddArray };
}
// Membagi array menjadi array genap dan ganjil
const { evenArray, oddArray } = splitArrayByIndex(randomArray);
console.log("Array Genap:", evenArray);
console.log("Array Ganjil:", oddArray);

// 3. Fungsi untuk menghitung nilai minimum dalam array
function calculateMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const minEven = calculateMin(evenArray);
const minOdd = calculateMin(oddArray);

console.log("Min Array Genap", minEven)
console.log("Min Array Ganjil", minOdd)
console.log("\n")

// 4. Fungsi untuk menghitung nilai maksimum dalam array
function calculateMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
}
return max;
}
const maxEven = calculateMax(evenArray);
const maxOdd = calculateMax(oddArray);

console.log("Max Array Genap", maxEven)
console.log("Max Array Ganjil", maxOdd)
console.log("\n")

// 5. Fungsi untuk menghitung total nilai dalam array
function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
const totalEven = calculateTotal(evenArray);
const totalOdd = calculateTotal(oddArray);

console.log("Total Array Genap", totalEven)
console.log("Total Array Ganjil", totalOdd)
console.log("\n")

// 6. Fungsi untuk menghitung rata-rata dalam array
function calculateAverage(arr) {
  const total = calculateTotal(arr);
  return total / arr.length;
}
const averageEven = calculateAverage(evenArray);
const averageOdd = calculateAverage(oddArray);

console.log("Rata-Rata Array Genap", averageEven)
console.log("Rata-Rata Array Ganjil", averageOdd)
console.log("\n")



// 7. Fungsi untuk membandingkan dua array
function compareArrays(arr1, arr2) {
  const min1 = calculateMin(arr1);
  const max1 = calculateMax(arr1);
  const total1 = calculateTotal(arr1);
  const average1 = calculateAverage(arr1);

  const min2 = calculateMin(arr2);
  const max2 = calculateMax(arr2);
  const total2 = calculateTotal(arr2);
  const average2 = calculateAverage(arr2);

  let comparisonResult = "";
  if (min1 > min2) {
    comparisonResult += "Min lebih besar array genap\n";
  } else if (min2 > min1) {
    comparisonResult += "Min lebih besar array ganjil\n";
  } else {
    comparisonResult +=
      "Min memiliki nilai sama antara array genap dan ganjil\n";
  }

  if (max1 > max2) {
    comparisonResult += "Max lebih besar array genap\n";
  } else if (max2 > max1) {
    comparisonResult += "Max lebih besar array ganjil\n";
  } else {
    comparisonResult +=
      "Max memiliki nilai sama antara array genap dan ganjil\n";
  }

  if (total1 === total2) {
    comparisonResult +=
      "Total memiliki nilai sama antara array genap dan ganjil\n";
  } else {
    comparisonResult +=
      "Total memiliki nilai berbeda antara array genap dan ganjil\n";
  }

  if (average1 > average2) {
    comparisonResult += "Rata-rata lebih besar array genap\n";
  } else if (average2 > average1) {
    comparisonResult += "Rata-rata lebih besar array ganjil\n";
  } else {
    comparisonResult +=
      "Rata-rata memiliki nilai sama antara array genap dan ganjil\n";
  }

  return comparisonResult;
}

const comparisonResult = compareArrays(evenArray, oddArray);
console.log("Hasil Perbandingan:\n" + comparisonResult);
