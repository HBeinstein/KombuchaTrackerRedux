import boardListReducer from './board-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterBoardList: boardListReducer,
});

export default rootReducer;