
function math_attr(name) {
  return Math[name];
}

function math_fn(name) {
  return Math[name].bind(Math);
}

function rad(angle) {
  return angle * PI / 180;
}
