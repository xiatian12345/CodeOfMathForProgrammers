let getResult = function () {
	let ret = [];
	let maxLength = 0;
	let countries = [
		"Brazil", "Croatia", "Mexico", "Cameroon",
		"Spain", "Netherlands", "Chile", "Australia",
		"Colombia", "Greece", "Cote d'Ivoire", "Japan",
		"Uruguay", "Costa Rica", "England", "Italy",
		"Switzerland", "Ecuador", "France", "Honduras",
		"Argentina", "Bosnia and Herzegovina", "Iran",
		"Nigeria", "Germany", "Portugal", "Ghana",
		"USA", "Belgium", "Algeria", "Russia",
		"Korea Republic"];
	countries = countries.map((e) => { return e.toLowerCase(); });

	let find = function (country, countries, depth, linkedlist) {
		let firstEnd = country[country.length - 1];//最后一位
		let all = [];
		for (let i = 0; i < countries.length; i++) {
			let cty = countries[i];
			if (cty[0] === firstEnd) {//最后一位和第一位一样可以作为一个分支
				all.push(cty);
			}
		}

		if (all.length > 0) {//对于所有分支，每个入口不能覆盖传入的countries和linkedlist
			for (let i = 0; i < all.length; i++) {
				let next = all[i];

				let newcities = countries.slice();//不能覆盖传入的countries,因为兄弟节点的分支入口countries都需要一样
				newcities.splice(newcities.indexOf(next), 1);

				let newlinkedlist = linkedlist.slice();//不能覆盖传入的linkedlist,因为兄弟节点的分支入口linkedlist都需要一样
				newlinkedlist.push(next);

				find(next, newcities, depth + 1, newlinkedlist);
			}
		} else { //结束了，更新maxLength
			if (depth > maxLength) {
				ret = [];//清空以前
				ret.push(linkedlist);
				maxLength = depth;
			} else if (depth == maxLength) {
				ret.push(linkedlist);
				maxLength = depth;
			}
		}
	};

	for (let i = 0; i < countries.length; i++) {//所有国家都做一次庄
		let country = countries[i];
		let tempcounties = countries.slice();
		tempcounties.splice(tempcounties.indexOf(country), 1);
		find(country, tempcounties, 1, [country]);
	}

	return ret;
};
console.log(getResult());


