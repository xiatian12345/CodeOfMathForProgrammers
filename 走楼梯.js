let getResult = function (onceMaxFloor, floorNumber) {
	let move = function (a, b) {
		if (a > b) {
			return 0;
		} else if (a === b) {
			return 1;
		} else {
			let total = 0;
			for (let i = 1; i <= onceMaxFloor; i++) {
				for (let j = 1; j <= onceMaxFloor; j++) {
					total += move(a + i, b - j);
				}
			}
			return total;
		}

	};
	return move(0, floorNumber);
}

console.log(getResult(4, 10));