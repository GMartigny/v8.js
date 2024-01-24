import test from "ava";
import v8, { isNativeActive } from "../src/index.js";

test("memory management", (t) => {
    if (!isNativeActive) {
        t.fail("V8 native functions not available");
    }

    const name = v8.getFunctionName(function executor () {});
    t.is(name, "executor");

    v8.collectGarbage();
    t.pass();
});
