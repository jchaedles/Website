"use strict";
let user = {
  name: "Joe",
  age: 18,
  isDope: true
};

for(let key in user)
{
  alert(key);
  alert(user[key]);
}

alert(user.name);
