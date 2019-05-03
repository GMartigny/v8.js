const functionsList = require("./src/functions-list");

const isNativeActive = process.execArgv.includes("--allow-natives-syntax");
module.exports.isNativeActive = isNativeActive;

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
                console.error(error);
                console.error("Fail to call native V8 function, try again with the --allow-natives-syntax flag.");
            }
        }

        return result;
    };
});
