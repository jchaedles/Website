"use strict";
let user = {
  name: "J Money",
  age: 100,
  isCool: "yes",
  printKeys() {
    for(let key in this)
    {
      if(typeof this[key] !== 'function')
      {
        alert(key + ":  " + this[key]);
      }
      else
      {
        alert("Function: " + key);
      }
    }
  }
};

user.printKeys();
alert("what is 'this': "  + this);

