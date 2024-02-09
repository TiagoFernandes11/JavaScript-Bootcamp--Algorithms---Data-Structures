function getFactor(num) {
  let result = 10;
  while (num / result > 10) {
    result *= 10;
  }
  return result;
}

function invertNum(num) {
  let factor = getFactor(num);
  let temp = num;
  let result = 0;

  if (num < 10) {
    return num;
  }

  while (temp >= 1) {
    result += (temp % 10) * factor;
    temp = Math.floor(temp / 10) - (temp % 10) / 10;
    factor /= 10;
  }

  return result;
}

console.log(String(invertNum(942745)));
