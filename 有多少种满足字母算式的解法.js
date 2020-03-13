let getResult = function () {
	const words = ['R', 'E', 'A', 'D', 'W', 'I', 'T', 'L', 'K', 'S'];
	const numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let ret = [];

	for (let r = 0; r < 10; r++) {
		if (r === 0) continue;
		for (let e = 0; e < 10; e++) {
			if (e === r) continue;
			for (let a = 0; a < 10; a++) {
				if (a === r || a === e) continue;
				for (let d = 0; d < 10; d++) {
					if (d === r || d === e || d === a) continue;
					for (let w = 0; w < 10; w++) {
						if (w === r || w === e || w === a || w === d) continue;
						if (w === 0) continue;
						for (let i = 0; i < 10; i++) {
							if (i === r || i === e || i === a || i === d || i === w) continue;
							for (let t = 0; t < 10; t++) {
								if (t === r || t === e || t === a || t === d || t === w || t === i) continue;
								if (t === 0) continue;
								for (let l = 0; l < 10; l++) {
									if (l === r || l === e || l === a || l === d || l === w || l === i || l === t) continue;
									for (let k = 0; k < 10; k++) {
										if (k === r || k === e || k === a || k === d || k === w || k === i || k === t || k == l) continue;
										for (let s = 0; s < 10; s++) {
											if (s === r || s === e || s === a || s === d || s === w || s === i || s === t || s == l || s === k) continue;
											if (s === 0) continue;
											let left =
												r * 1000 + e * 100 + a * 10 + d +
												w * 10000 + r * 1000 + i * 100 + t * 10 + e +
												t * 1000 + a * 100 + l * 10 + k;
											let right = s * 10000 + k * 1000 + i * 100 + l * 10 + l;
											if (left === right) {
												ret.push([r, e, a, d, w, i, t, l, k, s]);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	console.log(ret);
	return ret.length;
};
console.log(getResult());


