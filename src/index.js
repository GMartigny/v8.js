const functionsList = require("./functions-list");

let isNativeActive = true;

Object.keys(functionsList).forEach((funcName) => {
    module.exports[funcName] = (...args) => {
        const nbArgs = functionsList[funcName];
        const argsList = [...new Array(nbArgs >= 0 ? nbArgs : args.length)].map((_, i) => `arg${i}`);
        let result;
        try {
            const nativeName = `%${funcName[0].toUpperCase()}${funcName.substr(1)}`;
            const functionBody = `return ${nativeName}(${argsList.join(", ")});`;
            // eslint-disable-next-line no-new-func
            const func = new Function(...argsList, functionBody);
            result = func(...args);
        }
        catch (error) {
            if (isNativeActive) {
                throw error;
            }
            else {
                console.error("Fail to call native V8 function, try again with the --allow-natives-syntax flag.");
            }
        }

        return result;
    };
});

try {
    module.exports.getHeapUsage();
}
catch (error) {
    isNativeActive = false;
}

module.exports.isNativeActive = isNativeActive;
