
var dom_el = dom_fn('getElementById'),
    dom_el_bounds = dom_el_fn('getBoundingClientRect'),
    dom_el_on = dom_ev_fn('addEventListener'),
    dom_el_off = dom_ev_fn('removeEventListener'),
    dom_el_trigger = dom_ev_fn('dispatchEvent'),

    _dom_ev,

    dom_el_onmousedown = dom_ev_onlistener(_dom_ev = 'mousedown'),
    dom_el_offmousedown = dom_ev_offlistener(_dom_ev),
    dom_el_mousedown = dom_ev_trigger(_dom_ev),

    dom_el_onmouseup = dom_ev_onlistener(_dom_ev = 'mouseup'),
    dom_el_offmouseup = dom_ev_offlistener(_dom_ev),
    dom_el_mouseup = dom_ev_trigger(_dom_ev),

    dom_el_onmousemove = dom_ev_onlistener(_dom_ev = 'mousemove'),
    dom_el_offmousemove = dom_ev_offlistener(_dom_ev),
    dom_el_mousemove = dom_ev_trigger(_dom_ev),

    dom_el_onmouseover = dom_ev_onlistener(_dom_ev = 'mouseover'),
    dom_el_offmouseover = dom_ev_offlistener(_dom_ev),
    dom_el_mouseover = dom_ev_trigger(_dom_ev),

    dom_el_onmouseout = dom_ev_onlistener(_dom_ev = 'mouseout'),
    dom_el_offmouseout = dom_ev_offlistener(_dom_ev),
    dom_el_mouseout = dom_ev_trigger(_dom_ev),

    dom_el_onmouseenter = dom_ev_onlistener(_dom_ev = 'mouseenter'),
    dom_el_offmouseenter = dom_ev_offlistener(_dom_ev),
    dom_el_mouseenter = dom_ev_trigger(_dom_ev),

    dom_el_onmouseleave = dom_ev_onlistener(_dom_ev = 'mouseleave'),
    dom_el_offmouseleave = dom_ev_offlistener(_dom_ev),
    dom_el_mouseleave = dom_ev_trigger(_dom_ev);
