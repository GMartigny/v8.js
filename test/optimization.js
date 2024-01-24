/* eslint-disable no-bitwise */
import test from "ava";
import v8, { isNativeActive } from "../src/index.js";

test("optimization routine", (t) => {
    if (!isNativeActive) {
        t.fail("V8 native functions not available");
    }

    const func = () => "ok";

    const isOptimized = 1 << 4;
    t.true((v8.getOptimizationStatus(func) & isOptimized) === 0);

    v8.prepareFunctionForOptimization(func);
    v8.optimizeFunctionOnNextCall(func);
    func();
    t.true((v8.getOptimizationStatus(func) & isOptimized) !== 0);
});
