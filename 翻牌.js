let getResults = function () {
	let ret = new Array(100 + 1).fill(0);
	let space = 2;

	while (true) {
		for (let i = 1; i < 101; i++) {
			if (i % space == 0) {
				if (ret[i]) {
					ret[i] = 0;
				} else {
					ret[i] = 1;
				}
			}
		}
		space++;

		if (space >= 101) break;
	}
	return ret.map((val, idx) => { if (0 === val && idx > 0) return idx }).filter((val) => { return "undefined" !== typeof val });
};
console.log(getResults());