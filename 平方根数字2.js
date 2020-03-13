let getResult = function (flag) {
	let ret = 2;
	let count = 11;

	let isRight = function (arr) {
		let arr10Flags = [];
		for (let i = 0; i < count; i++) {
			arr10Flags.push(-1);
		}

		for (let j = 0; j < count; j++) {
			if ("." !== arr[j]) {
				arr10Flags[Number(arr[j])] = 1;
			}
		}
		let cnt = 0;
		for (let i = 0; i < arr10Flags.length; i++) {
			if (-1 === arr10Flags[i]) {
				cnt++;
			}
		}

		if (cnt >= 2) {
			return false;
		} else {
			return true;
		}
	}

	while (true) {
		let sqrt2 = Math.sqrt(ret);
		let retresult = 0;
		if (flag) {
			while (sqrt2 > 1) {
				sqrt2--;
				retresult++;
			}
		}
		let str2 = String(sqrt2).split("");
		if (flag) {
			str2.shift();
		}
		if (str2.length < count) {
			ret++;
			continue;
		}

		if (isRight(str2)) {
			if (flag) {
				console.log(retresult + str2.join(""));
			} else {
				console.log(str2.join(""));
			}
			return ret;
		} else {
			ret++;
		}
	}
};
console.log(getResult(false));
console.log(getResult(true));