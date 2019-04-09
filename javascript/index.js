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

//user.printKeys();
let result = function() {
  alert("function!");
};

let arrows = x => {
  alert("arroooows");
  alert("yeet");
  let infunc = () => {
    alert("insidefuncy");
  };
  infunc();
};
//arrows();
//result();
//alert("what is 'this': "  + this);
document.writeln("hi there");
