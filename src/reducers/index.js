import { combineReducers } from 'redux'
import { changeVid, CHANGE_VID, changeShow, CHANGE_SHOW } from '../actions/index';
const initialStateVideoReducer = {
  data : {
    show: "",
    video : {}
  }
};
export const videoReducer = (state = initialStateVideoReducer, action) => {
  switch(action.type){
    case CHANGE_VID:
      return {
        ...state,
        data: {
          ...state.data,
          video: {
            src: action.data.src,
            title: action.data.title
          }
        }
      };
    case CHANGE_SHOW:
      return {
        ...state,
        data: {
          show: action.data.show,
          video: {
            src: action.data.video.src,
            title: action.data.video.title
          }
        }
      }
    default: return state;
  }
}

export const rootReducer = combineReducers({
  videoReducer
});
