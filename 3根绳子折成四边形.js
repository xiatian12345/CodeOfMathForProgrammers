let getResult = function (minLen, maxLen) {
	let ret = 0;
	let gcd = function (a, b) {
		if (a === b) {
			return a;
		} else if (a > b) {
			return gcd(a - b, b);
		} else if (a < b) {
			return gcd(a, b - a);
		}
	}
	for (let i = minLen; i < maxLen; i++) {
		if (0 === i % 4) {
			let squareLen = i / 4;
			let squareSpace = squareLen * squareLen;
			for (let j = 1; j < i / 2; j++) {
				let rect1Width = j;
				let rect1Height = i / 2 - rect1Width;
				let rect1Space = rect1Width * rect1Height;
				for (let k = 1; k < i / 2; k++) {
					let rect2Width = k;
					let rect2Height = i / 2 - rect2Width;
					let rect2Space = rect2Width * rect2Height;
					let isMult = 1 !== gcd(rect1Space, rect2Space);
					if (!isMult && rect1Space + rect2Space === squareSpace) {
						console.log(
							'周长:', i,
							'[', squareLen, squareLen, ']', '->', squareSpace,
							'[', rect1Width, rect1Height, ']', '->', rect1Space,
							'[', rect2Width, rect2Height, ']', '->', rect2Space);
						ret++;
					}
				}
			}
		}
	}
	return ret;
}

console.log(getResult(1, 500));