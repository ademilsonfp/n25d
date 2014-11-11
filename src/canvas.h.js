
var canvas_fill_style = obj_prop('fillStyle'),
    canvas_line_width = obj_prop('lineWidth'),
    canvas_stroke_style = obj_prop('strokeStyle'),

    canvas_get_ctx = canvas_fn('getContext'),

    canvas_begin_path = canvas_ctx_fn('beginPath'),
    canvas_close_path = canvas_ctx_fn('closePath'),
    canvas_move_to = canvas_ctx_fn('moveTo'),
    canvas_line_to = canvas_ctx_fn('lineTo');
