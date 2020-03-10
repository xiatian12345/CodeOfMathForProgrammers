let getResult = function (man, woman) {
	let arr = [];
	for (let i = 0; i < woman + 1; i++) {
		let temp = [];
		for (let j = 0; j < man + 1; j++) {
			temp.push(0);
		}
		arr.push(temp);
	}

	arr[0][0] = 1;

	for (let i = 0; i < woman + 1; i++) {
		for (let j = 0; j < man + 1; j++) {
			if ((i != j) && (j - i) != (man - woman)) {
				if (i > 0) arr[i][j] += arr[i - 1][j];
				if (j > 0) arr[i][j] += arr[i][j - 1];
			}
		}
	}
	// console.log(arr);
	// console.log(arr[woman][man - 1]);//---->0
	// console.log(arr[woman - 1][man]);//---->2417461
	return arr[woman][man - 1] + arr[woman - 1][man];
};
console.log(getResult(20, 10));