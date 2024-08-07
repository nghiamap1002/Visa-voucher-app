import numeral from 'numeral';

export function fCurrency(number) {
  let formatFixed = fNumberFixed(number, 2);
  return `$${formatFixed}`;
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

// export function fShortenNumber(number) {
//   return replace(numeral(number).format('0.00a'), '.00', '');
// }

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function fNumberFixed(_number, numFixed) {
  let num = Number(_number);
  if (Number.isInteger(num)) {
    return `${num}.00`;
  } else {
    return num.toFixed(numFixed);
  }
}

export function fNumberFixed2(number, numFixed) {
  let _number = number || 0;
  let num = Number(_number);
  if (Number.isInteger(num)) {
    return `${num}`;
  } else {
    return num.toFixed(numFixed);
  }
}

export function fNumberInterger(_number, numFixed) {
  let num = Number(_number);
  if (Number.isInteger(num)) {
    return num;
  } else {
    return Math.round(num);
  }
}
