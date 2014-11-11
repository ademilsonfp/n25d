
function dom_attr(name) {
  return document[name];
}

function dom_fn(name) {
  return dom_attr(name).bind(document);
}
