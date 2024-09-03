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



// Activity 4: Merge Two Sorted Lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// Test cases
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);

while (mergedList !== null) {
    console.log(mergedList.val);  // 1 -> 1 -> 2 -> 3 -> 4 -> 4
    mergedList = mergedList.next;
}


// Activity 5: Valid Parentheses
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (stack.length === 0 || stack.pop() !== char) {
            return false;
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
