// Javascript Exercise


// 1. Add Two Numbers
function addTwoNumbers(arr1, arr2) {
    let carry = 0;
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        const num1 = i < arr1.length ? arr1[i] : 0;
        const num2 = i < arr2.length ? arr2[i] : 0;
        const sum = num1 + num2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if (carry) {
        result.push(carry);
    }
    return result;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); //  [7, 0, 8]


// 2. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); //  3
console.log(lengthOfLongestSubstring("bbbbb"));    //  1


// 3. Container With Most Water
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * minHeight);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); //  49
