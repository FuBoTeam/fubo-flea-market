const moment = require('moment');

export const dateFormat = (utcDate) => {
  return moment.utc(new Date(utcDate)).format('LLL');
};
