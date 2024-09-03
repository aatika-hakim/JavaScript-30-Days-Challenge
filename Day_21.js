// Javascript Exercise

// Activity 1: Two Sum
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]



// Activity 2: Reverse Integer
function reverseInteger(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;
    return reversed;
}

// Test cases
console.log(reverseInteger(123));   // 321
console.log(reverseInteger(-123));  // -321
console.log(reverseInteger(120));   // 21



// Activity 3: Palindrome Number
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Test cases
console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false

