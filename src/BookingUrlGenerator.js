module.exports = class BookingUrlGenerator {
  url(textToSearch, checkinDate, outDate) {
    return 'https://www.booking.com/searchresults.es.html' +
        '&ss=' + textToSearch +
        '&checkin_year=' + checkinDate.getFullYear() +
        '&checkin_month=' + padToTwo(checkinDate.getMonth() + 1) +
        '&checkin_monthday=' + padToTwo(checkinDate.getDate());
  }
};

function padToTwo(number) {
  if (number >= 10) {
    return number;
  }
  return ('0' + number).slice(-2);
}