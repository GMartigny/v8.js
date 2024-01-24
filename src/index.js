import functionsList from "./functions-list.js";

let active = true;

const v8 = Object.keys(functionsList).reduce((functions, funcName) => {
    functions[funcName] = (...args) => {
        const nbArgs = functionsList[funcName];
        const argsList = [...new Array(nbArgs >= 0 ? nbArgs : args.length)].map((_, i) => `arg${i}`);
        try {
            const nativeName = `%${funcName[0].toUpperCase()}${funcName.substr(1)}`;
            const functionBody = `return ${nativeName}(${argsList.join(", ")});`;
            // eslint-disable-next-line no-new-func
            const func = new Function(...argsList, functionBody);
            return func(...args);
        }
        catch (error) {
            if (active) {
                throw error;
            }
            else {
                console.error("Fail to call native V8 function, try again with the --allow-natives-syntax flag.");
            }
        }

        return null;
    };
    return functions;
}, {});

try {
    v8.collectGarbage();
}
catch (error) {
    active = false;
}

const isNativeActive = active;

export {
    isNativeActive,
};
export default v8;
