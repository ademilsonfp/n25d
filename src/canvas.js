
function canvas_fn(name) {
  return function(el) {
    return HTMLCanvasElement.prototype[name].apply(el, slice(arguments, 1));
  };
}

function canvas_ctx(canvas) {
  return canvas_get_ctx(canvas, '2d');
}

function canvas_ctx_fn(name) {
  return function(ctx) {
    return CanvasRenderingContext2D.prototype[name].apply(ctx, slice(arguments, 1));
  };
}
