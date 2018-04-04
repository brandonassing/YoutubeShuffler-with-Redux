export const CHANGE_VID = "CHANGE_VID";
export const CHANGE_SHOW = "CHANGE_SHOW";

export const changeVid = video => ({
  type: CHANGE_VID, data: video
});
export const changeShow = newData => ({
  type: CHANGE_SHOW, data: newData
});
