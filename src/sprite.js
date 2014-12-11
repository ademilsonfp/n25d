
function spr() {
  var new_spr = {};

  spr_pos(new_spr, point());
  spr_vol(new_spr, point());
  spr_piv(new_spr, point());
  spr_startpos(new_spr, point());
  spr_endpos(new_spr, point());

  return new_spr;
}

function spr_update_dimension(spr) {
  var pos = spr_pos(spr),
      vol = spr_vol(spr),
      piv = spr_piv(spr),
      start = point_sub(pos, piv),
      end = point_sum(start, vol);
  spr_startpos(spr, start);
  spr_endpos(spr, end);
}

function spr_set_pos(spr, pos) {
  spr_pos(spr, pos);
  spr_update_dimension(spr);
}

function spr_set_vol(spr, vol) {
  spr_vol(spr, vol);
  spr_update_dimension(spr);
}

function spr_set_piv(spr, piv) {
  spr_piv(spr, piv);
  spr_update_dimension(spr);
}

function spr_collide(spr, target) {
  var spr_start = spr_startpos(spr),
      ssx = point_x(spr_start),
      ssy = point_y(spr_start),
      ssz = point_z(spr_start),

      spr_end = spr_endpos(spr),
      sex = point_x(spr_end),
      sey = point_y(spr_end),
      sez = point_z(spr_end),

      tg_start = spr_startpos(target),
      tsx = point_x(tg_start),
      tsy = point_y(tg_start),
      tsz = point_z(tg_start),

      tg_end = spr_endpos(target),
      tex = point_x(tg_end),
      tey = point_y(tg_end),
      tez = point_z(tg_end);

  return
    lines_collide(ssz, sez, tsz, tez) &&
    lines_collide(ssx, sex, tsx, tex) &&
    lines_collide(ssy, sey, tsy, tey);
}
