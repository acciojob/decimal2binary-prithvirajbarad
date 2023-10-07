function decimalToBinary(decimalNum) {
  if (decimalNum === 0) {
    return "0";
  }

  let binaryNum = "";
  while (decimalNum > 0) {
    const remainder = decimalNum % 2;
    binaryNum = remainder + binaryNum;
    decimalNum = Math.floor(decimalNum / 2);
  }

  return binaryNum;
}

// Example usage:
const input1 = 7;
const input2 = 10;
const input3 = 33;

const output1 = decimalToBinary(input1);
const output2 = decimalToBinary(input2);
const output3 = decimalToBinary(input3);

console.log(`Input: ${input1}, Output: ${output1}`);
console.log(`Input: ${input2}, Output: ${output2}`);
console.log(`Input: ${input3}, Output: ${output3}`);