import { combineReducers } from 'redux';

import main from './main/main';
import sorting from './sorting';

export default combineReducers({
  main,
  sorting,
});
