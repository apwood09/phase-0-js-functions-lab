function calculateTax(amount) {
    const taxRate = 0.10; // 10%
    return amount * taxRate; 
}

function convertToUpperCase(text) {
     return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return (num1 > num2) ? num1 : num2; 
}

function isPalindrome(word) {
    const processedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = processedWord.split('').reverse().join('');
    return processedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;

    const discountedPrice = originalPrice - discountAmount;
  
    return discountedPrice;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };