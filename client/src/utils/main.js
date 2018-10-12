import moment from 'moment';

/**
 * If you have added new operator in filterOperators object ("/constants/filter.js" file),
 * also add new case in every method where it is needed
 */

export const filterByTextLength = (items, key, operator, value) => {
  switch (operator) {
    case 'equals': {
      return items.filter(r => r[key].length === value);
    }
    case 'notEquals': {
      return items.filter(r => r[key].length !== value);
    }
    case 'greaterThan': {
      return items.filter(r => r[key].length > value);
    }
    case 'lessThan': {
      return items.filter(r => r[key].length < value);
    }
    default: break;
  }
}

export const filterByConditionAsDate = (items, key, operator, value) => {
  switch (operator) {
    case 'equals': {
      return items.filter(r => moment(r[key]).isSame(moment(value), 'day'));
    }
    case 'notEquals': {
      return items.filter(r => !moment(r[key]).isSame(moment(value), 'day'))
    }
    case 'greaterThan': {
      return items.filter(r => moment(r[key]).isAfter(moment(value)));
    }
    case 'lessThan': {
      return items.filter(r => moment(r[key]).isBefore(moment(value)));
    }
    default: break;
  }
}

export const filterByConditionAsNumber = (items, key, operator, value) => {
  switch (operator) {
    case 'equals': {
      return items.filter(r => r[key] === value);
    }
    case 'notEquals': {
      return items.filter(r => r[key] !== value);
    }
    case 'greaterThan': {
      return items.filter(r => r[key] > value);
    }
    case 'lessThan': {
      return items.filter(r => r[key] < value);
    }
    default: break;
  }
}

export const filterByConditionAsString = (items, key, operator, value) => {
  switch (operator) {
    case 'equals': {
      return items.filter(r => r[key] === value);
    }
    case 'notEquals': {
      return items.filter(r => r[key] !== value);
    }
    case 'includes': {
      return items.filter(r => r[key].includes(value));
    }
    case 'notIncludes': {
      return items.filter(r => !r[key].includes(value));
    }
    default: break;
  }
}

export const filterByConditionAsArray = (items, key, operator, value) => {
  const values = value.split(' ');
  switch (operator) {
    case 'includes': {
      return items.filter(r => r.entities[key].some(s => values.includes((s.text || s.screen_name))));
    }
    case 'notIncludes': {
      return items.filter(r => !r.entities[key].some(s => values.includes((s.text || s.screen_name))));
    }
    default: break;
  }
}

export const getKeyByArrayValue = (object, value) => {
  return Object.keys(object).find(key => object[key].includes(value));
}
