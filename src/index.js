module.exports = function check(str, bracketsConfig) {
    let stack = [];
    str.split('').filter((element) => {
        let isConfigElement = bracketsConfig.find(configElement => configElement[0] === stack[stack.length - 1]);
        isConfigElement && isConfigElement[1] && isConfigElement[1] === element ? stack.pop() : stack.push(element);
    });
    return stack.length === 0;
}
