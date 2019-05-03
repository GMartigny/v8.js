const test = require("ava");
const v8 = require("../");

test("optimization routine", (t) => {
    const func = () => "ok";

    // v8.prepareFunctionForOptimization(func);
    t.is(v8.optimizeFunctionOnNextCall(func), undefined);
    func();
    t.is(v8.getOptimizationStatus(func));
});
