
function obj_new_prop(props) {
  var name;
  do name = obj2str(Number(36 + floor(1260 * random())), 36);
  while (-1 < index_of(props, name));
  push(props, name);
  return name;
}

function obj_descriptor() {
  return obj_new_prop.bind(null, [])
}

function obj_prop(name) {
  return function(obj, value) {
    if (1 < len(arguments) && value !== obj[name])
      obj[name] = value;
    else
      return obj[name];
  };
}

function obj_fn(name) {
  return function(obj) {
    return obj[name].apply(obj, slice(arguments, 1));
  };
}
