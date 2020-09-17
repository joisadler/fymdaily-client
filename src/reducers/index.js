import { combineReducers } from 'redux';
import ReviewReducer from './ReviewReducer';
import UserReducer from './UserReducer';
import SystemReducer from './SystemReducer';
import MessageReducer from './MessageReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  review: ReviewReducer,
  user: UserReducer,
  message: MessageReducer,
});

export default rootReducer;
