module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (
                str[j] === bracketsConfig[i][0] &&
                str[j + 1] === bracketsConfig[i][1]
            ) {
                let newStr = str.substring(0, j) + str.substring(j + 2);
                return check(newStr, bracketsConfig);
            }
        }
    }

    if (str === "") {
        return true;
    }

    return false;
};
