
var dom_el_proto = proto(HTMLElement),
    dom_ev_proto = proto(EventTarget),

    dom_el = dom_fn('getElementById'),
    dom_el_bounds = dom_el_fn('getBoundingClientRect'),
    dom_el_on = dom_ev_fn('addEventListener'),
    dom_el_off = dom_ev_fn('removeEventListener'),
    dom_el_trigger = dom_ev_fn('dispatchEvent');
