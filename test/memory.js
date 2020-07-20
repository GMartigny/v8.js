const test = require("ava");
const { getHeapUsage, collectGarbage } = require("..");

test("memory management", (t) => {
    const heap = getHeapUsage();
    t.true(heap > 0);

    collectGarbage();

    const newHeap = getHeapUsage();
    t.true(newHeap < heap);
});
