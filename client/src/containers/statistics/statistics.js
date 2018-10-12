import React from 'react';
import { connect } from 'react-redux';

import {
  allLikesSelector,
  averageLikesSelector,
  userMentionsSelector,
  hashtagsSelector,
} from '../../selectors/main';
import StatisticsComponent from '../../components/statistics';

const Statistics = ({...rest}) => <StatisticsComponent {...rest} />;

const mapStateToProps = (state) => ({
  allLikes: allLikesSelector(state),
  averageLikes: averageLikesSelector(state),
  userMentions: userMentionsSelector(state),
  hashtags: hashtagsSelector(state),
});

export default connect(mapStateToProps)(Statistics);
