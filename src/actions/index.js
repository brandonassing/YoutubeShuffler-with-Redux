export const CHANGE_VID = "CHANGE_VID";
export const CHANGE_SHOW = "CHANGE_SHOW";

export const changeVid = vidData => ({
  type: CHANGE_VID,
  data: vidData
});
export const changeShow = showData => ({
  type: CHANGE_SHOW,
  data: showData
});
