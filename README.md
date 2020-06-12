# JavaScript Class Instance Deconstructor Proof-of-Concept

I was curious if one could simulate C++ deconstructors in JavaScript.  Here is what I came up with.

It requires that the class instance be declared a member of `globalThis`.

```javascript
'use strict';

class Thing {
  deconstructor() {
    for (const key of Object.keys(globalThis)) {
      if (globalThis[key] == this)
        delete globalThis[key];
    }
  }
}

globalThis.thing = new Thing();

console.log(thing); // Thing {}
thing.deconstructor();
console.log(thing); // ReferenceError: thing is not defined
```