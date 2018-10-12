import React from 'react';
import { connect } from 'react-redux';

import {
  changeFilterCurrentCondition,
  changeFilterCurrentOperator,
  changeFilterCurrentValue,
  updateTweetsByFilter,
} from '../../actions/filter';
import FilterPanelComponent from '../../components/filter-panel';

const FilterPanel = ({...rest}) => <FilterPanelComponent {...rest} />;

const mapStateToProps = (state) => ({
  conditions: state.filter.conditions,
  operators: state.filter.operators,
  value: state.filter.currentValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterCondition: condition => dispatch(changeFilterCurrentCondition(condition)),
  changeFilterOperator: operator => dispatch(changeFilterCurrentOperator(operator)),
  changeFilterValue: value => dispatch(changeFilterCurrentValue(value)),
  filterTweets: () => dispatch(updateTweetsByFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
