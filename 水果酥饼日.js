let permutate2 = function (str) {//字符串全排列
	let ret = [];

	if (1 === str.length) {
		return [str];
	} else {
		let first = str[0];
		let other = str.slice(1);
		let otherPermutate = permutate2(other);
		for (let i = 0; i < otherPermutate.length; i++) {
			for (let j = 0; j < otherPermutate[i].length + 1; j++) {
				let temp = otherPermutate[i].slice(0, j) + first + otherPermutate[i].slice(j);
				ret.push(temp);
			}
		}
	}

	return ret;
};
// console.log(permutate2("123456789"));


let permutate3 = function (arr) {//数组全排列
	let ret = [];

	if (1 === arr.length) {
		return [arr];
	} else {
		let first = arr[0];
		let other = arr.slice(1);
		let otherPermutate = permutate3(other);
		for (let i = 0; i < otherPermutate.length; i++) {
			for (let j = 0; j < otherPermutate[i].length + 1; j++) {
				let cpy = otherPermutate[i].slice();
				cpy.splice(j, 0, first);
				ret.push(cpy);
			}
		}
	}

	return ret;
};
// console.log(permutate3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));//太多了，导致内存溢出



let getResult = function () {
	let findResult = function (start, other, sqrts) {//1,[3,2,1,4],[1,4]
		for (let i = 0; i < other.length; i++) {
			let number = other[i];
			if (-1 !== sqrts.indexOf(start + number)) {
				let new_other = other.slice(0, i).concat(other.slice(i + 1));
				if (0 === new_other.length) {//新的列表会逐渐减小到0
					if (-1 !== sqrts.indexOf(1 + number)) {
						return true;
					}
				}
				if (findResult(number, new_other, sqrts)) {
					console.log(number);
					return true;
				}
			}
		}
		return false;
	};

	let getSqrts = function (arr) {//根据数组获取平方数组--([1,2,3,4,5]--->[1,4,9])([1,2,3]--->[1,4])
		let len = arr.length;
		let maxSquare = len + (len - 1);
		let array = [];
		let idx = 1;
		while (idx * idx < maxSquare) {
			array.push(idx * idx);
			idx++;
		}
		return array;
	}

	let idx = 1;

	while (true) {
		let other = [];
		let start = 1;//始终以一块开始
		for (let i = 1; i < idx; i++) {
			other.push(i);
		}
		let sqrts = getSqrts(other);
		let find = findResult(start, other, sqrts);
		if (find) {
			break;
		} else {
			idx++;
		}
	}
	return idx;
}

console.log("最终答案：", getResult());
