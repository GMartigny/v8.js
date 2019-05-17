# V8.js
[![NPM version](https://flat.badgen.net/npm/v/v8.js)](https://www.npmjs.com/package/v8.js)
[![NPM weekly download](https://flat.badgen.net/npm/dw/v8.js)](https://www.npmjs.com/package/v8.js)
[![package publish size](https://flat.badgen.net/packagephobia/publish/v8.js)](https://packagephobia.now.sh/result?p=v8.js)
[![Support me on Patreon](https://flat.badgen.net/badge/become/a%20patron/F96753?icon=patreon)](https://www.patreon.com/gmartigny)

Call native V8 engine functions.

Can access all functions define in [V8 runtime](https://github.com/v8/v8/blob/master/src/runtime/runtime.h).
For brevity sake not all functions have been integrated to V8.js, if you need a function not listed [raise a new issue](https://github.com/GMartigny/v8.js/issues/new) explaining your use-case.

## Installation

    npm install v8.js

Or add a `<script>` tag in your HTML page:

```html
<script src="https://unpkg.com/v8.js"></script>
<!-- Or -->
<script src="https://cdn.jsdelivr.net/npm/v8.js"></script>
```

## Usage

V8.js exports a limited list of functions from the engine core that you can use.
In order for the package to work, you have to allow native syntax with the `--allow-natives-syntax` flag.

```js
const v8 = require("v8.js");

console.log(v8.getHeapUsage());
```

 * Node: `node --allow-natives-syntax file.js`
 * Chrome/Chromium: `chrome --js-flags="--allow-natives-syntax"`

## API

### getHeapUsage

Return the current size of the heap in bytes.

```js
v8.getHeapUsage();
```

### collectGarbage

Trigger the internal garbage collector.

```js
v8.collectGarbage();
```

<!--
### `prepareFunctionForOptimization`

Prepare a function to be optimized by the engine. This is the first step of the optimization routine.

```js
v8.prepareFunctionForOptimization(fn);
```

#### Arguments

 * {Function} The function that need to be prepared.
-->


### optimizeFunctionOnNextCall

Set a function to be optimize on its next call. This is the second step of the optimization routine.

```js
v8.optimizeFunctionOnNextCall(...fns);
```

#### Arguments

 * {...Function} Set of functions to target for optimization.


### getOptimizationStatus

Return integer representing the optimization status of a function in a binary flag format.

```js
v8.getOptimizationStatus(...fns);
```

#### Arguments

 * {...Function} Set of functions, give the optimization status for the first one.
 
 ## License
 
 [MIT](license)
