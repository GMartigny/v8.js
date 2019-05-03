# V8.js

Call native V8 engine functions.

## Installation

    npm install v8.js

## Usage

V8.js exports a limited list of functions from the engine core that you can use.
In order for the package to work, you have to allow native syntax with the `--allow-natives-syntax` flag.

```js
// In index.js
const v8 = require("v8.js");

console.log(v8.getHeapUsage());
```

 * Node: `node --allow-natives-syntax index.js`
 * Chrome/Chromium: `chrome --js-flags="--allow-natives-syntax"`

## API

### `prepareFunctionForOptimization`

Prepare a function to be optimized by the engine. This is the first step of the optimization routine.

```js
v8.prepareFunctionForOptimization(fn);
```

#### Arguments

 * {Function} The function that need to be prepared.


### `optimizeFunctionOnNextCall`

Set a function to be optimize on its next call. This is the second step of the optimization routine.

```js
v8.optimizeFunctionOnNextCall(fn);
```

#### Arguments

 * {...Function} The function set for optimization.


### `getOptimizationStatus`



```js
v8.optimizeFunctionOnNextCall(fn);
```

#### Arguments

 * {Function} The function set for optimization.
