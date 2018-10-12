import React from 'react';
import { connect } from 'react-redux';

import {
  changeSortingCurrentCondition,
  changeSortingCurrentOrder,
  updateTweetsBySorting,
} from '../../actions/sorting';
import SortingPanelComponent from '../../components/sorting-panel';

const SortingPanel = ({...rest}) => <SortingPanelComponent {...rest} />;

const mapStateToProps = (state) => ({
  conditions: state.sorting.conditions,
  orders: state.sorting.orders,
  condition: state.sorting.currentCondition,
  order: state.sorting.currentOrder,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingCondition: condition => dispatch(changeSortingCurrentCondition(condition)),
  changeSortingOrder: order => dispatch(changeSortingCurrentOrder(order)),
  sortTweets: () => dispatch(updateTweetsBySorting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);
