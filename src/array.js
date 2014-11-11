
function slice(arr) {
  var slice = Array.prototype.slice;
  return slice.call(arr, slice.call(arguments, 1));
}

function len(obj) {
  return obj.length;
}
