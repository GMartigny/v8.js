// Whole list at https://github.com/v8/v8/blob/master/src/runtime/runtime.h
// If you want to add a function to this list, raise an issue explaining how it would be useful.
module.exports = {
    // prepareFunctionForOptimization: 1, // FIXME: Why not working ?
    optimizeFunctionOnNextCall: -1,
    getOptimizationStatus: -1,

    collectGarbage: 1,
    getHeapUsage: 0,
};
