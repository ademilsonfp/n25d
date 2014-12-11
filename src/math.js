
function math_attr(name) {
  return Math[name];
}

function math_fn(name) {
  return Math[name].bind(Math);
}

function rad(angle) {
  return angle * PI / 180;
}

function lines_collide(as, ae, bs, be) {
  return (as >= bs && as <= be) || (ae >= bs && ae <= be);
}
