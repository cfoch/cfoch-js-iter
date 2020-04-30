var Benchmark = require('benchmark');
var _ = require('lodash');

const ARRAY_SIZE = Number(process.env.ARRAY_SIZE) || 1000000;
var foreachFunc = (unusedValue) => {};
var targetArray = Array.from({length: ARRAY_SIZE}, Math.random);

var suite = new Benchmark.Suite;

suite.add('lodash', function() {
    _.each(targetArray, foreachFunc);
})
.add('native-foreach', function() {
    targetArray.forEach(foreachFunc);
})
.add('increment', function() {
    for (let i in targetArray) {
      foreachFunc(targetArray[i]);
    }
})
.add('decrement', function() {
    for (let i = targetArray.length - 1; i--;) {
        foreachFunc(targetArray[i - targetArray.length]);
    }
})
.add('for...in', function() {
    for (let i in targetArray) {
      foreachFunc(targetArray[i]);
    }
})
// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
    console.log('Successful tests were ' + this.filter('successful').map('name'));
})
// run async
.run({ 'async': true });
