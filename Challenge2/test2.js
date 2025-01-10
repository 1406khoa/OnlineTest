const arr = [3, 7, 1, 2, 6, 4];



function findMissingNumber(arr, n) {
    n = arr.length;
    let totalSum = ((n + 1) * (n + 2)) / 2;
    let arrSum = arr.reduce((sum, currentValue) => sum + currentValue, 0);
    let result = totalSum - arrSum;
    return result;
}

console.log("Missing number is: ", findMissingNumber(arr)); // 5

