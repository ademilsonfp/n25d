
var _prototype = 'prototype';
function proto(obj, value) {
  if (1 < len(arguments) && value !== obj[_prototype])
    obj[_prototype] = value;
  else
    return obj[_prototype];
}
