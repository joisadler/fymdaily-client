import { combineReducers } from 'redux';
import ReviewReducer from './ReviewReducer';
import UserReducer from './UserReducer';
import SystemReducer from './SystemReducer';
import MessageReducer from './MessageReducer';
import SettingsMenu from './SettingsMenuReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  review: ReviewReducer,
  user: UserReducer,
  message: MessageReducer,
  settingsMenu: SettingsMenu,
});

export default rootReducer;
