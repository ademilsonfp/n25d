var CAM_RSU_ANGLE = rad(30),
    CAM_RSU_SIN = sin(CAM_RSU_ANGLE),
    CAM_RSU_COS = cos(CAM_RSU_ANGLE),

    cam_new_prop = obj_descriptor(),

    CAM_POS = cam_new_prop(),
    CAM_SCALE = cam_new_prop(),
    CAM_RSU = cam_new_prop(),
    CAM_AXSIZ = cam_new_prop(),

    cam_pos = obj_prop(CAM_POS),
    cam_scale = obj_prop(CAM_SCALE),
    cam_rsu = obj_prop(CAM_RSU),
    cam_axsiz = obj_prop(CAM_AXSIZ);
