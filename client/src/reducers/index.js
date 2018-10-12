import { combineReducers } from 'redux';

import main from './main/main';
import sorting from './sorting';
import filter from './filter/filter';

export default combineReducers({
  main,
  sorting,
  filter,
});
