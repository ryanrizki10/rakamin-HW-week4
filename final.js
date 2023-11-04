// 1. Mmebuat fungsi Array acak dari 1 - 100
function setRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random()*50)+1);
  }
  return randomArray;
}
const randomArray = setRandomArray();
console.log("Random Array dimulai dari Index 0:", randomArray);

// 2. Memecah array menjadi array genap dan ganjil
function splitArrayByIndex(ray) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < ray.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(ray[i]);
    } else {
      oddArray.push(ray[i]);
    }
  }
  return { evenArray, oddArray };
}
const{ evenArray, oddArray } = splitArrayByIndex(randomArray);
console.log("Array Genap:", evenArray);
console.log("Array Ganjil:", oddArray);

// 3. Menghitung nilai minimum dalam array
function calculateMin(ray) {
    let min = ray[0];
    for (let i = 1; i < ray.length; i++) {
        if (ray[i] < min) {
            min = ray[i];
        }
    }
    return min;
}
const minEven = calculateMin(evenArray);
const minOdd = calculateMin(oddArray);

console.log("Min Array Genap", minEven)
console.log("Min Array Ganjil", minOdd)
console.log("\n")

// 4. Menghitung nilai maksimum dalam array
function calculateMax(ray) {
  let max = ray[0];
  for (let i = 1; i < ray.length; i++) {
    if (ray[i] > max) {
      max = ray[i];
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
function calculateTotal(ray) {
    let total = 0;
    for (let i = 0; i < ray.length; i++) {
        total += ray[i];
    }
    return total;
}
const totalEven = calculateTotal(evenArray);
const totalOdd = calculateTotal(oddArray);

console.log("Total Array Genap", totalEven)
console.log("Total Array Ganjil", totalOdd)
console.log("\n")

// 6. Menghitung rata-rata dalam array
function calculateAverage(ray) {
  const total = calculateTotal(ray);
  return total / ray.length;
}
const averageEven = calculateAverage(evenArray);
const averageOdd = calculateAverage(oddArray);

console.log("Rata-Rata Array Genap", averageEven)
console.log("Rata-Rata Array Ganjil", averageOdd)
console.log("\n")



// 7. Fungsi untuk membandingkan dua array
function compareArrays(ray1, ray2) {
  
  const min1 = calculateMin(ray1);
  const max1 = calculateMax(ray1);
  const total1 = calculateTotal(ray1);
  const average1 = calculateAverage(ray1);

  const min2 = calculateMin(ray2);
  const max2 = calculateMax(ray2);
  const total2 = calculateTotal(ray2);
  const average2 = calculateAverage(ray2);

  let compareResult = "";
  if (min1 > min2) {
    compareResult += "Min lebih besar array genap\n";
  } else if (min2 > min1) {
    compareResult += "Min lebih besar array ganjil\n";
  } else {
    compareResult +=
      "Min memiliki nilai sama antara array genap dan ganjil\n";
  }

  if (max1 > max2) {
    compareResult += "Max lebih besar array genap\n";
  } else if (max2 > max1) {
    compareResult += "Max lebih besar array ganjil\n";
  } else {
    compareResult +=
      "Max memiliki nilai sama antara array genap dan ganjil\n";
  }

  if (total1 === total2) {
    compareResult +=
      "Total memiliki nilai sama antara array genap dan ganjil\n";
  } else {
    compareResult +=
      "Total memiliki nilai berbeda antara array genap dan ganjil\n";
  }

  if (average1 > average2) {
    compareResult += "Rata-rata lebih besar array genap\n";
  } else if (average2 > average1) {
    compareResult += "Rata-rata lebih besar array ganjil\n";
  } else {
    compareResult +=
      "Rata-rata memiliki nilai sama antara array genap dan ganjil\n";
  }

  return compareResult;
}

const compareResult = compareArrays(evenArray, oddArray);
console.log("Hasil Perbandingan:\n" + compareResult);
