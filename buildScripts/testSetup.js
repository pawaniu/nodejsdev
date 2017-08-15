// This file isn't transpiled, so must use Common JS and ES5

// Reqire babele to transpiled before our test run
require("babel-register")();

// Disable webpack feature that mocha does not understand
require.extensions['.css'] = function () {};