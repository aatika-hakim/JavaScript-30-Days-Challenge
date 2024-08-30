// ***** Algorithms ***** //


//*Task 1: Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                }
                }
                return arr;
                }
let Array = [23,89,90, 9, 80, 34];                
console.log(bubbleSort(Array));


//*Task 2: Selection sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap
    }
    console.log("Selection Sort:", arr);
}

selectionSort([64, 34, 25, 12, 22, 11, 90]);

//*Task 3: Quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort:", quickSort([64, 34, 25, 12, 22, 11, 90]));



// Activity 2: Searching Algorithms
// Task 4: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1; // Not found
}

console.log("Linear Search Index:", linearSearch([64, 34, 25, 12, 22, 11, 90], 22));


// Task 5: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Not found
}

console.log("Binary Search Index:", binarySearch([11, 12, 22, 25, 34, 64, 90], 25));


// Activity 3: String Algorithms
// Task 6: Character Count
function charCount(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log("Character Counts:", count);
}

charCount("hello world");


// Task 7: Longest Substring Without Repeating Characters
function longestUniqueSubstring(str) {
    let maxLen = 0;
    let start = 0;
    let map = {};

    for (let end = 0; end < str.length; end++) {
        if (map[str[end]] !== undefined) {
            start = Math.max(map[str[end]] + 1, start);
        }
        map[str[end]] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }

    console.log("Longest Unique Substring Length:", maxLen);
}

longestUniqueSubstring("abcabcbb");


// Activity 4: Array Algorithms

// Task 8: Rotate Array
function rotateArray(arr, k) {
    k = k % arr.length; // Handle rotations greater than array length
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log("Rotated Array:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


// Task 9: Merge Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    console.log("Merged Array:", result);
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);


// Activity 5: Dynamic Programming

// Task 10: Fibonacci Sequence
function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log("Fibonacci Sequence:", dp.slice(0, n + 1));
}

fibonacci(10);


// Task 11: Knapsack Problem
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    console.log("Maximum Knapsack Value:", dp[capacity]);
}

knapsack([1, 2, 3], [60, 100, 120], 5);