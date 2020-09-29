import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';
import HistoryReducer from './HistoryReducer';
import SettingsMenuReducer from './SettingsMenuReducer';
import FoodReducer from './FoodReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  message: MessageReducer,
  history: HistoryReducer,
  settingsMenu: SettingsMenuReducer,
  food: FoodReducer,
});

export default rootReducer;
