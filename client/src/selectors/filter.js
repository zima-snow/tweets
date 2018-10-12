import { createSelector } from 'reselect';

import { getKeyByArrayValue } from '../utils/main';

export const filter = state => state.filter;

export const currentFilterConditionSelector = createSelector(
  filter,
  ({ currentCondition }) => currentCondition,
);

export const currentFilterOperatorSelector = createSelector(
  filter,
  ({ currentOperator }) => currentOperator,
);

export const currentFilterValueSelector = createSelector(
  filter,
  ({ currentValue }) => currentValue,
);

export const filterConditionsSelector = createSelector(
  filter,
  ({ conditions }) => conditions,
);

export const filterOperatorsSelector = createSelector(
  filter,
  ({ operators }) => operators,
);

export const filterConditionsByTypeSelector = createSelector(
  filter,
  ({ filterConditionsByType }) => filterConditionsByType,
);

export const filterOperatorsByTypeSelector = createSelector(
  filter,
  ({ filterOperatorsByType }) => filterOperatorsByType,
);

export const filterTypeOfConditionSelector = createSelector(
  currentFilterConditionSelector,
  filterConditionsByTypeSelector,
  (condition, conditionsByType) => getKeyByArrayValue(conditionsByType, condition),
);

export const filterOperatorsByConditionSelector = createSelector(
  filterTypeOfConditionSelector,
  filterOperatorsSelector,
  filterOperatorsByTypeSelector,
  (typeOfCondition, operators, operatorsByType) => {
    const operatorsList = operatorsByType[typeOfCondition];
    const result = {};
    operatorsList.forEach((key) => {
      result[key] = operators[key];
    });
    return result;
  },
);
