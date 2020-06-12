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