/* eslint-disable no-bitwise */
const test = require("ava");
const { getOptimizationStatus, prepareFunctionForOptimization, optimizeFunctionOnNextCall } = require("..");

test("optimization routine", (t) => {
    const func = () => "ok";

    const isOptimized = 1 << 4;
    t.true((getOptimizationStatus(func) & isOptimized) === 0);

    prepareFunctionForOptimization(func);
    optimizeFunctionOnNextCall(func);
    func();
    t.true((getOptimizationStatus(func) & isOptimized) !== 0);
});
