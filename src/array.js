
function arr_fn(name) {
  return function(arr) {
    return arr_proto[name].apply(arr, slice(arguments, 1));
  };
}

function slice(arr) {
  return _slice.call(arr, _slice.call(arguments, 1));
}

function len(obj) {
  return obj.length;
}
