const moment = require('moment');

export const dateFormat = (utcDate) => {
  return moment(utcDate, 'YYYY-MM-DD hh:mm:ss z').format('LLL');
};
