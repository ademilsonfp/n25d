
function brick(pos, size, pivot) {
  var new_brick = {};
  brick_pos(new_brick, pos || point());
  brick_size(new_brick, size || point());
  brick_pivot(new_brick, pivot || point());
  return new_brick;
}

function brick_collide(brick_a, brick_b) {

}
