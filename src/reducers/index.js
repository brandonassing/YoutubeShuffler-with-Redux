import { combineReducers } from 'redux'
import { addArticle, ADD_ARTICLE } from '../actions/index';


const testReducer = (state = {}, action) => {
  switch(action.types){
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    default: return state;
  }
}

export const rootReducer = combineReducers({
  testReducer
});
