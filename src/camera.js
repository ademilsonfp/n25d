
function cam() {
  var new_cam = {};

  cam_pos(new_cam, point());
  cam_scale(new_cam, CAM_DEFAULT_SCALE);
  cam_rsu(new_cam, CAM_DEFAULT_RSU);
  cam_update_axsiz(new_cam);

  return new_cam;
}

function cam_update_axsiz(cam) {
  var rsu = cam_scale(cam) * cam_rsu(cam);
  cam_axsiz(cam, point(
    rsu * CAM_RSU_COS,
    rsu * CAM_RSU_SIN,
    rsu
  ));
}

function cam_set_rsu(cam, size) {
  cam_rsu(cam, size);
  cam_update_axsiz();
}

function cam_set_scale(cam, scale) {
  cam_scale(cam, scale);
  cam_update_axsiz(cam);
}

function cam_canvas2world(cam, p, el) {
  if (2 < len(arguments)) {
    var bounds = dom_el_bounds(el);
    p = point_sub(p, point(obj_left(bounds), obj_top(bounds)));
  }

  var px = point_x(p),
      py = point_y(p),

      cp = cam_pos(cam),
      cpx = point_x(cp),
      cpy = point_y(cp),
      cpz = point_z(cp),

      as = cam_axsiz(cam),
      asx = point_x(as),
      asy = point_y(as),
      asz = point_z(as);

  return point(
    (px + asx * cpx) / asx,
    (py + asy * cpy) / asy,
    cpz
  );
}

function cam_world2canvas(cam, p) {
  var px = point_x(p),
      py = point_y(p),
      pz = point_z(p),

      cp = cam_pos(cam),
      cpx = point_x(cp),
      cpy = point_y(cp),
      cpz = point_z(cp),

      as = cam_axsiz(cam),
      asx = point_x(as),
      asy = point_y(as),
      asz = point_z(as);

  return point(
    asx * px - asx * cpx,
    asy * py - asy * cpy - asz * pz + asz * cpz
  );
}

function cam_spr2world(p) {
  var px = point_x(p),
      py = point_y(p),
      pz = point_z(p);

  return point(
    px - py,
    px + py,
    pz
  );
}

function cam_canvas2tile(cam, p) {
}

function cam_world2tile(cam, p) {
}
