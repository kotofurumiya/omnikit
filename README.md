# omnikit

Omnikit is a JavaScript utility bundle, which contains `Optional` class, collections, math and so on.

Note: First version contains only few features. I will add more features. Stay tuned.

## Install(without Node.js / on Browsers)

Copy `build/omnikit.min.js` into your project directory,
and load the file from your HTML file.

```
<script src="omnikit.min.js"></script>
<script>
  // Write your code here!
</script>
```

Other files(`lib`, `src`, etc.) are for Node.js, so you can ignore them.

## Install(with Node.js)

Install omnikit into your project.

```
npm install omnikit --save
```

Then import modules that you need. For example, `Optional`, `Stack` and `Random`.

```
const { Optional, Stack, Random } = require('omnikit');
```

## Basic Usage

For details, see [API Document](https://kotofurumiya.github.io/omnikit/).

### Optional

`Optional` class represent nullable(undefinable) value, which is inspired by Java and Swift.

```
const opt = new Optional('hello');
const opt2 = opt.map((val) => val + ' world');
const str = opt2.flatMap((val) => val);
console.log(str); // hello world
```

### Random

`Random` class generate random values with a seed.

```
const random = new Random();
// const randomWithSeed = new Random(12345);

console.log(random.next());
console.log(random.nextInt(5, 10)); // from 5 to 10
```

### conditions

```
const cond1 = isNull(null); // true
const cond2 = isUndefined(undefined); // true
```

### Stack and Queue

Stack is LIFO(Last In First Out) and Queue is FIFO(First In First Out).

```
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
```