const test = require("ava");
const v8 = require("../");

test("memory management", (t) => {
    t.is(v8.getHeapUsage());

    t.is(v8.collectGarbage());
});
