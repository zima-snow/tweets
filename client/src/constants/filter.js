/**
 * Hardcode for options of Select component in FilterPanel component with label "Choose condition".
 * For example, this object can be gotten from server or configuration files.
 * Most importantly, this object is placed in filter reducer, because SPA work with redux state.
 */
export const filterConditions = {
  user_mentions: 'User mention',
  hashtags: 'Hashtags',
  text: 'Tweet text',
  created_at: 'Date of creation',
  favorite_count: 'Count of likes',
  tweetLength: 'Tweet length',
  // add new key: it is may key in tweet object (like "created_at") or special key (like "tweetLength")
};

/**
 * Hardcode for options of Select component in FilterPanel component with label "Choose operator";
 * This object can be gotten from server or configuration files;
 * Most importantly, this object is placed in filter reducer, because SPA work with redux state.
 */
export const filterOperators = {
  equals: 'Equals',
  notEquals: 'Not equals',
  includes: 'Includes',
  notIncludes: 'Not includes',
  greaterThan: 'Greater than',
  lessThan: 'Less than',
  // add new operator
};

/**
 * Object which keep types of values in tweet object;
 * This object can be gotten from server or configuration files;
 * Most importantly, this object is placed in filter reducer, because SPA work with redux state.
 */
export const filterConditionsByType = {
  // if you have added new key in filterConditions object, also add this key to one of the values
  asDate: ['created_at' /* for example, here */],
  asNumber: ['favorite_count', 'tweetLength'],
  asString: ['text'],
  asArray: ['user_mentions', 'hashtags'],
};

/**
 * Object which keep information about what is supported operators for types;
 * This object can be gotten from server or configuration files;
 * Most importantly, this object is placed in filter reducer, because SPA work with redux state.
 */
export const filterOperatorsByType = {
  // if you have added new operator in filterOperators object, also add this operator to one of the values
  asDate: ['equals', 'notEquals', 'greaterThan', 'lessThan'],
  asNumber: ['equals', 'notEquals', 'greaterThan', 'lessThan'],
  asString: ['equals', 'notEquals', 'includes', 'notIncludes'],
  asArray: ['includes', 'notIncludes' /* for example, here */],
};
