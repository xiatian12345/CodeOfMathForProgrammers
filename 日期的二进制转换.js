let getResults = function (from, to) {
	let curr = Number(from);
	let ret = [];
	let dateIsLegal = function (date) {
		let datastring = date.substring(0, 4) + "/" + date.substring(4, 6) + "/" + date.substring(6, 8);
		let newdate = new Date(datastring);
		if (String(newdate) === "Invalid Date") {
			return false;
		}
		return true;
	}

	while (curr != Number(to)) {
		let bin1 = curr.toString(2);
		let bin2 = bin1.split("").reverse().join("");
		let num = bin2.toString(10);
		let temp = parseInt(num, 2);
		if (curr === temp && dateIsLegal(String(temp))) {
			ret.push(curr);
		}

		curr += 1;
	}
	return ret;
};
console.log(getResults("19641010", "20200724"));