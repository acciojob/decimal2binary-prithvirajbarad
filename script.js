unction decimalToBinary(num) {
  if (num === 0) {
    return "0"; // Special case for 0
  }

  let binary = "";
  while (num > 0) {
    const remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;