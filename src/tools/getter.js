const PubSub = require('expubsub');

module.exports = {
  classArr: ['start', 'segment', 'end'],

  getDate(el) {
    return el.getAttribute('date');
  },

  format(date) {
    return date.format('YYYY-MM-DD');
  },

  classFunc(firstItem, classStr) {
    return (firstItem ? 'active ' : 'focus ') + classStr;
  }
};