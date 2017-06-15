module.exports = class BookingUrlGenerator {
  url(textToSearch, checkInDate, checkOutDate) {
    return encodeURI('https://www.booking.com/searchresults.es.html' +
        '&ss=' + textToSearch +
        '&ss_raw=' + textToSearch +
        '&checkin_year=' + checkInDate.getFullYear() +
        '&checkin_month=' + checkInDate.getMonth() + 1 +
        '&checkin_monthday=' + checkInDate.getDate() +
        '&checkout_year=' + checkOutDate.getFullYear() +
        '&checkout_month=' + checkOutDate.getMonth() + 1 +
        '&checkout_monthday=' + checkOutDate.getDate() +
        '&no_rooms=1' +
        '&group_adults=2' +

        '&sb=1' +
        '&src=index' +
        '&src_elem=sb' +
        '&room1=A,A' +
        '&group_children=0' +
        '&ac_position=0' +
        '&ac_langcode=es' +
        '&dest_type=hotel' +
        '&search_selected=true' +
        '&ac_suggestion_list_length=2' +
        '&ac_suggestion_theme_list_length=0' +
        '');
  }
};

function padToTwo(number) {
  if (number >= 10) {
    return number;
  }
  return ('0' + number).slice(-2);
}