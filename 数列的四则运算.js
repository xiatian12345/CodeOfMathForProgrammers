let getResults = function () {
    let ret = [];

    let operators = ["+", "-", "*", "/", ""];
    let opLen = operators.length;
    let tempStr = "";
    for (let i = 0; i < opLen; i++) {
        for (let j = 0; j < opLen; j++) {
            for (let k = 0; k < opLen; k++) {
                for (let n = 1000; n <= 10000; n++) {
                    tempStr = String(n);
                    var val = tempStr.charAt(3) + operators[i] + tempStr.charAt(2) + operators[j] + tempStr.charAt(1) + operators[k] + tempStr.charAt(0);
                    if (val.length > 4 && eval(val) === n) {
                        ret.push(n + " = " + val);
                    }
                }
            }
        }
    }

    return ret;
};
console.log(getResults());