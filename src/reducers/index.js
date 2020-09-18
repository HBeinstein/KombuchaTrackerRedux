import boardListReducer from './board-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
});

export default rootReducer;