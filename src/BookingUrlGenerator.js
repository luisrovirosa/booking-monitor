module.exports = class BookingUrlGenerator {
  url(textToSearch, checkInDate, checkOutDate) {
    return 'https://www.booking.com/searchresults.es.html' +
        '&ss=' + textToSearch +
        '&checkin_year=' + checkInDate.getFullYear() +
        '&checkin_month=' + padToTwo(checkInDate.getMonth() + 1) +
        '&checkin_monthday=' + padToTwo(checkInDate.getDate()) +
        '&checkout_year=' + checkOutDate.getFullYear() +
        '&checkout_month=' + padToTwo(checkOutDate.getMonth() + 1) +
        '&checkout_monthday=' + padToTwo(checkOutDate.getDate());
  }
};

function padToTwo(number) {
  if (number >= 10) {
    return number;
  }
  return ('0' + number).slice(-2);
}