

cfoch-js-iter
===

Benchmarking of different ways to iterate an array in javascript.

## Executing benchmark

Run `ARRAY_SIZE=100 npm start`


### Results as of the date of this commit



As of the date of this commit, these are the results for [this](https://www.amazon.com/Hack-Laptop-That-Teaches-Kids/dp/B07KZXBKN7) machine: 

### For an array size of 10:

```
lodash x 4,554,654 ops/sec ±0.31% (91 runs sampled)
native-foreach x 56,605,277 ops/sec ±0.34% (88 runs sampled)
increment x 1,085,991 ops/sec ±0.65% (92 runs sampled)
decrement x 555,248 ops/sec ±0.37% (92 runs sampled)
for...in x 1,098,222 ops/sec ±0.39% (90 runs sampled)
Fastest is native-foreach
Slowest is decrement
Successful tests were lodash,native-foreach,increment,decrement,for...in
```
**Fastest : native-foreach**
**Slowest: decrement**

### For an array size of 1000 
```
lodash x 52,214 ops/sec ±0.51% (87 runs sampled)
native-foreach x 316,135 ops/sec ±43.71% (85 runs sampled)
increment x 13,971 ops/sec ±0.84% (83 runs sampled)
decrement x 4,592 ops/sec ±0.69% (88 runs sampled)
for...in x 14,476 ops/sec ±1.09% (89 runs sampled)
Fastest is native-foreach
Slowest is decrement
Successful tests were lodash,native-foreach,increment,decrement,for...in
```
**Fastest : native-foreach**
**Slowest: decrement**


### For an array size of 1000000
```
lodash x 47.82 ops/sec ±1.53% (60 runs sampled)
native-foreach x 39.26 ops/sec ±1.58% (51 runs sampled)
increment x 2.44 ops/sec ±22.21% (11 runs sampled)
decrement x 1.14 ops/sec ±10.31% (7 runs sampled)
for...in x 2.55 ops/sec ±16.64% (11 runs sampled)
Fastest is lodash
Slowest is decrement
Successful tests were lodash,native-foreach,increment,decrement,for...in
```
**Fastest : lodash**
**Slowest: decrement**
