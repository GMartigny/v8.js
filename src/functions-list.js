// Whole list at https://github.com/v8/v8/blob/master/src/runtime/runtime.h
// If you want to add a function to this list, raise an issue explaining how it would be useful.

// Key is the function's name, value is the number of arguments (-1 allow for not fixed number)
export default {
    prepareFunctionForOptimization: -1,
    optimizeFunctionOnNextCall: -1,
    getOptimizationStatus: -1,

    collectGarbage: 1,

    getFunctionName: 1,
};
