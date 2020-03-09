let getResult = function (pos, times) {
	let ret = 0;
	let getR = function (pos, times) {
		if (times <= 0) {
			return 0;
		}
		let last = pos[pos.length - 1];
		let nextPos = [[last[0] - 1, last[1]], [last[0] + 1, last[1]], [last[0], last[1] + 1], [last[0], last[1] - 1]];//下次可能的路

		for (let j = 0; j < nextPos.length; j++) {
			let nxtp = nextPos[j];
			let enable = true;
			for (let i = 0; i < pos.length; i++) {
				let p = pos[i];
				if (p[0] === nxtp[0] && p[1] === nxtp[1]) { //这个点已经走到过
					enable = false;
					break;
				}
			}
			if (enable) {
				let cpy = pos.slice();
				cpy.push(nxtp);
				if (cpy.length === 13) ret++;//只有最后全部走完才计数
				getR(cpy, times - 1);
			}
		}
	};
	getR(pos, times);
	return ret;
}

console.log(getResult([[0, 0]], 12));//从[0,0]开始走，走了一条不同的路就记录下去