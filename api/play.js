
var transparent = 'rgba(0,0,0,0)',
    play_cam = cam(),
    play_canvas = dom_el('play'),
    play = canvas_ctx(play_canvas);

function draw_cube(p, fill_style, stroke_style, stroke_width) {
  var p1 = point_sum(p, point( 0, -1,  1)), p1x, p1y,
      p2 = point_sum(p, point( 1,  0,  1)), p2x, p2y,
      p3 = point_sum(p, point( 1,  0,  0)), p3x, p3y,
      p4 = point_sum(p, point( 0,  1,  0)), p4x, p4y,
      p5 = point_sum(p, point(-1,  0,  0)), p5x, p5y,
      p6 = point_sum(p, point(-1,  0,  1)), p6x, p6y;

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

  canvas_save(play);

  canvas_begin_path(play);
  canvas_move_to(play, p1x, p1y);
  canvas_line_to(play, p2x, p2y);
  canvas_line_to(play, p3x, p3y);
  canvas_line_to(play, p4x, p4y);
  canvas_line_to(play, p5x, p5y);
  canvas_line_to(play, p6x, p6y);
  canvas_line_to(play, p1x, p1y);
  canvas_close_path(play);

  canvas_fill_style(play, fill_style);
  canvas_stroke_style(play, stroke_style);
  canvas_fill(play);
  canvas_stroke(play);

  canvas_restore(play);
}

function draw_red_cube(p) {
  draw_cube(p, transparent, 'red', 1);
}

function draw_green_cube(p) {
  draw_cube(p, transparent, 'green', 1);
}

function draw_blue_cube(p) {
  draw_cube(p, transparent, 'blue', 1);
}
