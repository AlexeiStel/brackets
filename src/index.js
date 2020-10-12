module.exports = function check(str, bracketsConfig) {
    let stackBrackets = [];

     const isOpenBrackets = (currentBrackets) => {
        for (let i = 0; i < bracketsConfig.length; i++) {

            const [openBrackets, closeBrackets] = bracketsConfig[i];

            if (currentBrackets === openBrackets) {
                if (openBrackets === closeBrackets) return -1;

                return closeBrackets;
            }
        }
        return false;
    };

    const getLastElement = (array) => {
        if (Array.isArray(array))
            return array[array.length - 1];
        else
            throw new Error('error');
    };

    if ((str.length % 2)) return false;

    str.split('').forEach(item => {

        const closeBracket = isOpenBrackets(item);

        if (closeBracket === false) {

            return item === getLastElement(stackBrackets)
                ? stackBrackets.pop()
                : false;

        } else if (closeBracket === -1) {

            item === getLastElement(stackBrackets)
                ? stackBrackets.pop()
                : stackBrackets.push(item);

        } else {
            stackBrackets.push(closeBracket);
        }
    });

    return !stackBrackets.length;
};

