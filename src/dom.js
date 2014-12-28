
function dom_attr(name) {
  return document[name];
}

function dom_fn(name) {
  return dom_attr(name).bind(document);
}

function dom_el_fn(name) {
  return function(el) {
    return dom_el_proto[name].apply(el, slice(arguments, 1));
  };
}

function dom_ev_fn(name) {
  return function(el) {
    return dom_ev_proto[name].apply(el, slice(arguments, 1));
  };
}

function dom_ev_onlistener(name) {
  return function(el) {
    return dom_el_on.apply(null,
        concat([el, name], slice(arguments, 1)));
  };
}

function dom_ev_offlistener(name) {
  return function(el) {
    return dom_el_off.apply(null,
        concat([el, name], slice(arguments, 1)));
  };
}

function dom_ev_trigger(name) {
  return function(el) {
    return dom_el_trigger.apply(null,
        concat([el, name], slice(arguments, 1)));
  };
}
