let getResult = function (manNumber, fragmentNumber, totalNum) {//人数，总的段数，木棒数
	if (fragmentNumber <= totalNum) {//木棒段数小于木棒数切分完成
		return 0;
	}
	if (totalNum < manNumber) {//木棒数小于人数，切完后木棒数翻倍
		return 1 + getResult(manNumber, fragmentNumber, 2 * totalNum);
	} else {//木棒数大于人数，切完后木棒数+=人数
		return 1 + getResult(manNumber, fragmentNumber, totalNum + manNumber);
	}
};
console.log(getResult(3, 20, 1));
console.log(getResult(5, 100, 1));