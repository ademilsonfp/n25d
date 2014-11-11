
function obj_new_prop(props) {
  var name;
  do name = (36 + floor(1260 * random())).toString(36);
  while (-1 < props.indexOf(name));
  props.push(name);
  return name;
}

function obj_descriptor() {
  return obj_new_prop.bind(null, [])
}

function obj_prop(name) {
  return function(obj, value) {
    if (1 < arguments.length && value !== obj[name])
      obj[name] = value;
    else
      return obj[name];
  };
}
