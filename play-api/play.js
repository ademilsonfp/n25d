
var transparent = 'rgba(0,0,0,0)',
    play_cam = cam(),
    play_canvas = dom_el('play'),
    play = canvas_ctx(play_canvas);

function draw_cube(p, stroke_style, line_width) {
  var p1 = point_sum(p, point( 0, -1,  1)), p1x, p1y,
      p2 = point_sum(p, point( 1,  0,  1)), p2x, p2y,
      p3 = point_sum(p, point( 1,  0,  0)), p3x, p3y,
      p4 = point_sum(p, point( 0,  1,  0)), p4x, p4y,
      p5 = point_sum(p, point(-1,  0,  0)), p5x, p5y,
      p6 = point_sum(p, point(-1,  0,  1)), p6x, p6y,
      pc = point_sum(p, point( 0, -1,  0)), pcx, pcy;

  p1 = cam_world2canvas(play_cam, p1);
  p1x = point_x(p1);
  p1y = point_y(p1);

  p2 = cam_world2canvas(play_cam, p2);
  p2x = point_x(p2);
  p2y = point_y(p2);

  p3 = cam_world2canvas(play_cam, p3);
  p3x = point_x(p3);
  p3y = point_y(p3);

  p4 = cam_world2canvas(play_cam, p4);
  p4x = point_x(p4);
  p4y = point_y(p4);

  p5 = cam_world2canvas(play_cam, p5);
  p5x = point_x(p5);
  p5y = point_y(p5);

  p6 = cam_world2canvas(play_cam, p6);
  p6x = point_x(p6);
  p6y = point_y(p6);

  pc = cam_world2canvas(play_cam, pc);
  pcx = point_x(pc);
  pcy = point_y(pc);

  canvas_save(play);
  canvas_stroke_style(play, stroke_style || 0);
  canvas_line_width(play, line_width || 1);

  canvas_begin_path(play);
  canvas_move_to(play, p1x, p1y);
  canvas_line_to(play, p2x, p2y);
  canvas_line_to(play, p3x, p3y);
  canvas_line_to(play, p4x, p4y);
  canvas_line_to(play, p5x, p5y);
  canvas_line_to(play, p6x, p6y);
  canvas_close_path(play);
  canvas_stroke(play);

  canvas_begin_path(play);
  canvas_move_to(play, p5x, p5y);
  canvas_line_to(play, pcx, pcy);
  canvas_line_to(play, p3x, p3y);
  canvas_stroke(play);

  canvas_begin_path(play);
  canvas_move_to(play, p6x, p6y);
  canvas_line_to(play, pcx, pcy);
  canvas_line_to(play, p2x, p2y);
  canvas_stroke(play);

  canvas_begin_path(play);
  canvas_move_to(play, p1x, p1y);
  canvas_line_to(play, p4x, p4y);
  canvas_stroke(play);

  canvas_restore(play);
}

function red_cube(p) {
  draw_cube(p, 'red');
}

function green_cube(p) {
  draw_cube(p, 'green');
}

function blue_cube(p) {
  draw_cube(p, 'blue');
}

function yellow_cube(p) {
  draw_cube(p, 'yellow');
}

function magenta_cube(p) {
  draw_cube(p, 'magenta');
}

function purple_cube(p) {
  draw_cube(p, 'purple');
}

function draw_sprect(p, w, h, stroke_style, line_width) {
  var c = cam_world2canvas.bind(null, play_cam),
      p1 = c(p),
      p2 = c(point_sum(p, cam_spr2world(point(w, 0)))),
      p3 = c(point_sum(p, cam_spr2world(point(w, h)))),
      p4 = c(point_sum(p, cam_spr2world(point(0, h))));

  canvas_save(play);
  canvas_stroke_style(play, stroke_style || 0);
  canvas_line_width(play, line_width || 1);

  canvas_begin_path(play);
  canvas_move_to(play, point_x(p1), point_y(p1));
  canvas_line_to(play, point_x(p2), point_y(p2));
  canvas_line_to(play, point_x(p3), point_y(p3));
  canvas_line_to(play, point_x(p4), point_y(p4));
  canvas_close_path(play);
  canvas_stroke(play);

  canvas_restore(play);
}

function red_sprect(p, w, h) {
  draw_sprect(p, w, h, 'red');
}

function green_sprect(p, w, h) {
  draw_sprect(p, w, h, 'green');
}

function blue_sprect(p, w, h) {
  draw_sprect(p, w, h, 'blue');
}

function yellow_sprect(p, w, h) {
  draw_sprect(p, w, h, 'yellow');
}

function magenta_sprect(p, w, h) {
  draw_sprect(p, w, h, 'magenta');
}

function purple_sprect(p, w, h) {
  draw_sprect(p, w, h, 'purple');
}

(function() {
  var x, y, p,
      width = obj_width(play_canvas),
      height = obj_height(play_canvas);

  function render() {
    canvas_clear_rect(play, 0, 0, width, height);

    if (!isnan(x) && !isnan(y)) {
      var p2, p3, p4, p5;

      //p2 = point_sum(p, point(0, 0, 0));
      p3 = point_sum(p, point(1, 1, 0));
      p4 = point_sum(p, point(0, 2, 0));
      p5 = point_sum(p, point(1, 3, 0));

      yellow_cube(p);
      //blue_cube(p2);
      magenta_cube(p3);
      green_cube(p4);
      purple_cube(p5);
    }

    blue_sprect(point(2, 1, 0), 4, 3);
  }

  function update_pointer(event) {
    x = obj_clientx(event),
    y = obj_clienty(event),
    p = cam_canvas2world(play_cam, point(x, y), play_canvas);
  }

  dom_el_onmousemove(window, update_pointer);

  setInterval(render, 30);
  render();
})();
