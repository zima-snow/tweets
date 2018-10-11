import { createSelector } from 'reselect';

export const sorting = state => state.sorting;

export const currentSortingConditionSelector = createSelector(
  sorting,
  ({ currentCondition }) => currentCondition,
);

export const currentSortingOrderSelector = createSelector(
  sorting,
  ({ currentOrder }) => currentOrder,
);

export const sortingConditionsSelector = createSelector(
  sorting,
  ({ conditions }) => conditions,
);

export const sortingOrdersSelector = createSelector(
  sorting,
  ({ orders }) => orders,
);
