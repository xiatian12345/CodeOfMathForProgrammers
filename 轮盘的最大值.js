let getResult = function (low, high) {
	const european = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36,
		11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9,
		22, 18, 29, 7, 28, 12, 35, 3, 26]
	const american = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15,
		3, 24, 36, 13, 1, 0, 27, 10, 25, 29, 12, 8, 19, 31,
		18, 6, 21, 33, 16, 4, 23, 35, 14, 2]

	let getMaxTotal = function (arr, num) {
		let max = 0;
		for (let i = 0; i < arr.length; i++) {
			let currIdx = i;
			let currMax = 0;
			for (let j = 0; j < num; j++) {
				currMax += arr[(currIdx + j) % arr.length];
			}
			if (currMax > max) {
				max = currMax;
			}
		}
		return max;
	}
	let eurArr = Array(low).fill(0);
	let ameArr = Array(low).fill(0);
	for (let i = low; i <= high; i++) {
		eurArr.push(getMaxTotal(european, i));
		ameArr.push(getMaxTotal(american, i));
	}
	let ret = 0;
	for (let i = 0; i < eurArr.length; i++) {
		if (eurArr[i] < ameArr[i]) {
			ret++;
		}
	}
	return ret;
};
console.log(getResult(2, 36));