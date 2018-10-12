export const filterConditions = {
  user_mentions: 'User mention',
  hashtags: 'Hashtags',
  text: 'Tweet text',
  created_at: 'Date of creation',
  favorite_count: 'Count of likes',
  tweetLength: 'Tweet length',
};

export const filterOperators = {
  equals: 'Equals',
  notEquals: 'Not equals',
  includes: 'Includes',
  notIncludes: 'Not includes',
  greaterThan: 'Greater than',
  lessThan: 'Less than',
};

export const filterConditionsByType = {
  asDate: ['created_at'],
  asNumber: ['favorite_count', 'tweetLength'],
  asString: ['text'],
  asArray: ['user_mentions', 'hashtags'],
};

export const filterOperatorsByType = {
  asDate: ['equals', 'notEquals', 'greaterThan', 'lessThan'],
  asNumber: ['equals', 'notEquals', 'greaterThan', 'lessThan'],
  asString: ['equals', 'notEquals', 'includes', 'notIncludes'],
  asArray: ['includes', 'notIncludes'],
};
