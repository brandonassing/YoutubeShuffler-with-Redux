export const CHANGE_VID = "CHANGE_VID";
export const CHANGE_CHANNEL = "CHANGE_CHANNEL";

export const changeVid = video => ({ type: CHANGE_VID, data: video });
export const changeChannel = newData => ({ type: CHANGE_CHANNEL, data: newData });
