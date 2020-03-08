let getResult = function (low, hig) {
	let klz = function (num) {
		let firstNum = num * 3 + 1;
		while (firstNum !== 1) {
			if (firstNum === num) {
				return true;
			}
			if ((firstNum % 2) == 1) {
				firstNum = firstNum * 3 + 1;
			} else {
				firstNum /= 2;
			}
		}
		return false;
	};
	let ret = 0;
	for (let i = low; i <= hig; i += 2) {
		if (klz(i)) {
			ret++;
		}
	}
	return ret;
};
console.log(getResult(2, 10000));