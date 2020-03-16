//如果把数据数据都存放，会导致内存不足，试了下28都还可以，可以只存放结果，调用getResult2即可
let getResult = function (totalPeople) {
	let resultCache = {
		2: {//分为两种情况，最后一位是男1，或者女0
			0: [[1, 0], [0, 0]],//女男，男男
			1: [[0, 1]]//男女
		},
	}
	let calc = function (num) {
		for (let i = 3; i <= num; i++) {
			let ret = resultCache[i - 1];
			resultCache[i] = {
				0: (ret[0].concat(ret[1])).map((v) => { let ret = v.slice(); ret.push(0); return ret; }),
				1: ret[0].slice()
			};
		}
	};
	calc(totalPeople);
	console.log(resultCache[totalPeople]);
	return resultCache[totalPeople][0].length + resultCache[totalPeople][1].length;
}
console.log("答案：", getResult(28));//内存溢出

console.log("------------------------------------------");

let getResult2 = function (totalPeople) {
	let resultCache = {
		2: {
			0: 2,
			1: 1
		},
	}
	let calc = function (num) {
		for (let i = 3; i <= num; i++) {
			let ret = resultCache[i - 1];
			resultCache[i] = {
				0: ret[0] + ret[1],
				1: ret[0]
			};
		}
	};
	calc(totalPeople);
	console.log(resultCache);
	return resultCache[totalPeople][0] + resultCache[totalPeople][1];
}

console.log("答案：", getResult2(30));
