
var canvas_fill_style = obj_prop('fillStyle'),
    canvas_line_width = obj_prop('lineWidth'),
    canvas_stroke_style = obj_prop('strokeStyle'),

    canvas_get_ctx = canvas_fn('getContext'),

    canvas_save = canvas_ctx_fn('save'),
    canvas_restore = canvas_ctx_fn('restore'),
    canvas_begin_path = canvas_ctx_fn('beginPath'),
    canvas_close_path = canvas_ctx_fn('closePath'),
    canvas_move_to = canvas_ctx_fn('moveTo'),
    canvas_line_to = canvas_ctx_fn('lineTo'),
    canvas_fill = canvas_ctx_fn('fill'),
    canvas_stroke = canvas_ctx_fn('stroke');
