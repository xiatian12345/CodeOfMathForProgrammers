let getResults = function (arrLength) {
	let ret = [];

	//考虑到超出js数字边界，需要实现大整数加法
	let bigIntegerAdd = function (str1, str2) {
		let maxLen = str1.length > str2.length ? str1.length : str2.length;
		let diffLen = Math.abs(str1.length - str2.length);
		maxLen += 1;

		let arr1 = str1.split('');
		let arr2 = str2.split('');

		if (str1.length > str2.length) {
			for (let i = 0; i < diffLen; i++) {
				arr2.unshift('0');
			}
		} else {
			for (let i = 0; i < diffLen; i++) {
				arr1.unshift('0');
			}
		}

		let result = Array(maxLen);
		let temp = 0;//进位
		for (let i = 0; i < maxLen - 1; i++) {
			let sum = Number(arr1[maxLen - 1 - i - 1]) + Number(arr2[maxLen - 1 - i - 1]) + temp;
			let ge = sum % 10;
			let shi = Math.floor(sum / 10);
			result[maxLen - 1 - i] = ge;
			temp = shi;
		}
		if (temp) {
			result[0] = temp;
		} else {
			result.shift();
		}

		return result.join('');
	}


	//考虑到大整数除法
	let bigIntegerDiv = function (str, divider) {
		let arr = str.split('');
		let holder = 0//;除完留下的余数

		for (let i = 0; i < arr.length; i++) {
			let temp = holder * 10 + Number(arr[i]);
			if (temp >= divider) {
				holder = temp % divider;
			} else {
				holder = temp;
			}
		}

		if (0 === holder) {
			return true;
		} else {
			return false;
		}
	}

	//判断是否满足条件
	let isRight = function (str) {
		let sum = str.split('').reduce((a, b) => { return Number(a) + Number(b); });
		sum = Number(sum);
		return bigIntegerDiv(str, sum);
	}

	let febCache = [];
	//获取斐波拉契字符串(考虑到大整数)
	let getFeb = function (idx) {
		if (!febCache[idx]) {//没有的话才计算，否则直接从缓存拿
			if (0 === idx || 1 === idx) {
				febCache[idx] = '1';
			} else {
				febCache[idx] = bigIntegerAdd(getFeb(idx - 1), getFeb(idx - 2));
			}
		}
		return febCache[idx];
	}

	let currIdx = 2;//从2号位置开始
	while (arrLength) {
		let result = getFeb(currIdx);
		if (isRight(result)) {
			arrLength--;
			ret.push(result);
		}
		currIdx++;
	}

	// for (let i = 0; i < 50; i++) {
	// 	getFeb(i);
	// }
	// console.log(febCache);
	// console.log(bigIntegerDiv("5555555555555555555555555555555555523", 5));
	// console.log(bigIntegerAdd("111111111111111", "6666666666666666666666222222222222222"));

	return ret;
};
console.log(getResults(35));