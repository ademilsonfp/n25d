
function point() {
  var new_p = {},
      p = (1 === arguments.length && 'object' === typeof arguments[0])
          ? arguments[0] : arguments;
  new_p[POINT_X] = (0 < p.length && !isNaN(p[0])) ? p[0] : 0;
  new_p[POINT_Y] = (1 < p.length && !isNaN(p[1])) ? p[1] : 0;
  new_p[POINT_Z] = (2 < p.length && !isNaN(p[2])) ? p[2] : 0;
  return new_p;
}

function point_sum(p1, p2) {
  var p = {};
  p[POINT_X] = p1[POINT_X] + p2[POINT_X];
  p[POINT_Y] = p1[POINT_Y] + p2[POINT_Y];
  p[POINT_Z] = p1[POINT_Z] + p2[POINT_Z];
  return p;
}

function point_sub(p1, p2) {
  var p = {};
  p[POINT_X] = p1[POINT_X] - p2[POINT_X];
  p[POINT_Y] = p1[POINT_Y] - p2[POINT_Y];
  p[POINT_Z] = p1[POINT_Z] - p2[POINT_Z];
  return p;
}

function point_mul(p1, p2) {
  var p = {};
  p[POINT_X] = p1[POINT_X] * p2[POINT_X];
  p[POINT_Y] = p1[POINT_Y] * p2[POINT_Y];
  p[POINT_Z] = p1[POINT_Z] * p2[POINT_Z];
  return p;
}

function point_div(p1, p2) {
  var p = {};
  p[POINT_X] = p1[POINT_X] / p2[POINT_X];
  p[POINT_Y] = p1[POINT_Y] / p2[POINT_Y];
  p[POINT_Z] = p1[POINT_Z] / p2[POINT_Z];
  return p;
}

function point_mod(p1, p2) {
  var p = {};
  p[POINT_X] = p1[POINT_X] % p2[POINT_X];
  p[POINT_Y] = p1[POINT_Y] % p2[POINT_Y];
  p[POINT_Z] = p1[POINT_Z] % p2[POINT_Z];
  return p;
}

function point_floor(p) {
  var new_p = {};
  new_p[POINT_X] = floor(p[POINT_X]);
  new_p[POINT_Y] = floor(p[POINT_Y]);
  new_p[POINT_Z] = floor(p[POINT_Z]);
  return new_p;
}

function point_ceil(p) {
  var new_p = {};
  new_p[POINT_X] = ceil(p[POINT_X]);
  new_p[POINT_Y] = ceil(p[POINT_Y]);
  new_p[POINT_Z] = ceil(p[POINT_Z]);
  return new_p;
}

function point_round(p) {
  var new_p = {};
  new_p[POINT_X] = round(p[POINT_X]);
  new_p[POINT_Y] = round(p[POINT_Y]);
  new_p[POINT_Z] = round(p[POINT_Z]);
  return new_p;
}
