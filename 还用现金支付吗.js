let getResult = function (totalMoney, moneyArray, limitedLength) {
	if (totalMoney === 0 && limitedLength >= 0) {
		return 1;
	} else if (totalMoney < 0 || moneyArray.length === 0 || limitedLength < 0) {
		return 0;
	} else {
		let result1 = getResult(totalMoney - moneyArray[0], moneyArray, limitedLength - 1);//使用次数减少1
		let result2 = getResult(totalMoney, moneyArray.slice(1), limitedLength);//使用次数不会变
		return result1 + result2;
	}
};
console.log(getResult(1000, [500, 100, 50, 10], 15));