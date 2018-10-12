import moment from 'moment';

import { getKeyByArrayValue } from '../../utils/main';

export const changeFilterCurrentCondition = (state, action) => {
  const typeOfCondition = getKeyByArrayValue(state.filterConditionsByType, action.payload);
  let currentValue, currentOperator;
  switch (typeOfCondition) {
    case 'asDate': {
      currentValue = moment();
      currentOperator = 'equals';
      break;
    }
    case 'asNumber': {
      currentValue = 0;
      currentOperator = 'equals';
      break;
    }
    case 'asArray': {
      currentValue = '';
      currentOperator = 'includes';
      break;
    }
    default: {
      currentValue = '';
      currentOperator = 'equals';
    }
  }
  return {
    ...state,
    currentCondition: action.payload,
    currentValue,
    currentOperator,
  }
};
