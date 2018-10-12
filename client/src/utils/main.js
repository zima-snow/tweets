import moment from 'moment';

export const filterByEquals = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  const date = moment(value, 'DD.MM.YYYY', true);
  if (date.isValid()) {
    return items.filter(r => moment(r[key]).isSame(moment(value)));
  }
  return items.filter(r => r[key] === value);
}

export const filterByNotEquals = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  const date = moment(value, 'DD.MM.YYYY', true);
  if (date.isValid()) {
    return items.filter(r => !moment(r[key]).isSame(moment(value)));
  } else {
    return items.filter(r => r[key] !== value);
  }
}

export const filterByGreaterThan = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  const date = moment(value, 'DD.MM.YYYY', true);
  if (date.isValid()) {
    return items.filter(r => moment(r[key]).isAfter(moment(value)));
  } else {
    return items.filter(r => r[key] > value);
  }
}

export const filterByLessThan = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  const date = moment(value, 'DD.MM.YYYY', true);
  if (date.isValid()) {
    return items.filter(r => moment(r[key]).isBefore(moment(value)));
  } else {
    return items.filter(r => r[key] < value);
  }
}

export const filterByIncludes = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  return items.filter(r => r[key].includes(value));
}

export const filterByNotIncludes = (items, key, value) => {
  if (items.length === 0) {
    return items;
  }
  return items.filter(r => !r[key].includes(value));
}
