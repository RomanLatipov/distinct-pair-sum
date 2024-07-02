function distinctPairSum(arr, k) {
  const hash = {};
  const newArr = [];

  for (let i=0; i<arr.length; i++) {
    if(hash[arr[i]]) {
      hash[arr[i]] += 1;
    }
    else {
      hash[arr[i]] = 1;
    }
  }

  for (const num in hash) {
    const target = k - num;
    if (hash[target]) {
      if (num == target) {
        if (hash[target] < 2) {
          continue;
        }
      }
      newArr.push([parseInt(num), target])
      delete hash[num];
      delete hash[target];
    }
  }
  return newArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
