export const gcdMath = (initA, initB) => {
  let w = initA % initB;
  let a = initA;
  let b = initB;

  while (true) {
    a = b;
    b = w;
    w = a % b;

    if (w === 0) {
      break;
    }
  }
  return b;
}

export const primesMath = (limitNumber) => {
  let primes = [];
  let flg = true;

  for (var i=2; i <= limitNumber; i++) {
    for (var j=2; j < i; j++) {
			if (i % j === 0) {
				flg = false;
        break;
			}
		}
		if (flg) {
			primes.push(i);
		}
    flg = true;
  }

  return primes;
}
