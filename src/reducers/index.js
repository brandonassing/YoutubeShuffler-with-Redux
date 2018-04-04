import { combineReducers } from 'redux'
import { changeVid, CHANGE_VID, changeChannel, CHANGE_CHANNEL } from '../actions/index';
const initialState = {
  data : {}
};
export const videoReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_VID:
      return {
        ...state,
        data: {
          ...state.data,
          show: action.data.show,
          src: action.data.src,
          title: action.data.title
        }
      };
    case CHANGE_CHANNEL:
      return {
        ...state,
        data: {
          channel: action.data.channel,
          show: action.data.show,
          src: action.data.src,
          title: action.data.title
        }
      }
    default: return state;
  }
}

export const rootReducer = combineReducers({
  videoReducer
});
