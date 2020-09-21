import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SystemReducer from './SystemReducer';
import MessageReducer from './MessageReducer';
import HistoryReducer from './HistoryReducer';
import SettingsMenu from './SettingsMenuReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer,
  message: MessageReducer,
  history: HistoryReducer,
  settingsMenu: SettingsMenu,
});

export default rootReducer;
