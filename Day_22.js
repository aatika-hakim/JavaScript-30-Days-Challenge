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
