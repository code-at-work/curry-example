# Curry Example

Here the video: https://youtu.be/ejj8vUjOVog

```js
const curry2 = fn => a => b => fn(a,b)

const lt = curry2((a,b) => a<b)

const is_greater_than_3 = lt(3)

is_greater_than_3(4) // true
```
