let getResult = function () {
	let res = [2, 3, 5, 6, 7, 8];
	let arr10Flags = [];
	let arrs = [];
	let results = Array(6).fill(-1);
	for (let i = 0; i < res.length; i++) {
		arr10Flags.push(Array(10).fill(0));
		let sqrt2 = Math.sqrt(res[i]);
		arrs.push(String(sqrt2).slice(""));
	}

	for (let i = 0; i < arrs.length; i++) {
		let arr = arrs[i];
		for (let j = 0; j < arr.length; j++) {
			if ("." !== arr[j]) {
				arr10Flags[i][Number(arr[j])] = 1;

				if (arr10Flags[i].every((e) => {
					return e === 1;
				})) {
					results[i] = j;//存储最小步数
					break;
				}
			}
		}
	}

	if (results.every((e) => {
		return -1 === e;
	})) {
		console.log("。。。。精度不支持。。。。此题没做出来！！！");
		return "";
	}

	let idx = 0;
	for (let i = 0; i < results.length; i++) {
		if (results[i] < results[idx]) {
			idx = i;
		}
	}
	return res[idx];
};
console.log(getResult());