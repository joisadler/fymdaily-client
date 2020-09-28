import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';
import HistoryReducer from './HistoryReducer';
import SettingsMenu from './SettingsMenuReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  message: MessageReducer,
  history: HistoryReducer,
  settingsMenu: SettingsMenu,
});

export default rootReducer;
