import { createSelector } from 'reselect';

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
