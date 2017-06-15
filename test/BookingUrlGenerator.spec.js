let assert = require('assert');
let BookingUrlGenerator = require('../src/BookingUrlGenerator');
let expect = require('chai').expect;

describe('BookingUrlGenerator', function() {
  let urlGenerator;
  beforeEach(() => {
    urlGenerator = new BookingUrlGenerator();
  });

  it('the url is from booking', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date(), new Date());
    expect(url).to.include('https://www.booking.com/searchresults.es.html');
  });

  it('includes the search text', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date(), new Date());
    expect(url).to.include('&ss=Velassaru Maldives');
    expect(url).to.include('&ss_raw=Velassaru Maldives');
  });

  it('includes the checkin date', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date('2017/02/06'), new Date());
    expect(url).to.include('&checkin_year=2017');
    expect(url).to.include('&checkin_month=02');
    expect(url).to.include('&checkin_monthday=06');
  });

  it('includes the checkout date', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date(), new Date('2017/02/06'));
    expect(url).to.include('&checkout_year=2017');
    expect(url).to.include('&checkout_month=02');
    expect(url).to.include('&checkout_monthday=06');
  });

  it('there is one room', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date(), new Date());
    expect(url).to.include('&no_rooms=1');
  });

  it('the room is for two adults', function() {
    let url = urlGenerator.url('Velassaru Maldives', new Date(), new Date());
    expect(url).to.include('&group_adults=2');
  });
});

// ?label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaEaIAQGYAQrCAQN4MTHIAQzYAQHoAQH4AQuSAgF5qAID
// &sid=923f9a1e5c5f1673fa051447ff8af1d3
// &sb=1
// &src=index
// &src_elem=sb
// &error_url=https%3A%2F%2Fwww.booking.com%2Findex.es.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaEaIAQGYAQrCAQN4MTHIAQzYAQHoAQH4AQuSAgF5qAID%3Bsid%3D923f9a1e5c5f1673fa051447ff8af1d3%3Bsb_price_type%3Dtotal%26%3B
// &ss=Velassaru+Maldives%2C+Mal%C3%A9%2C+Las+Maldivas%2C+Maldivas
// &room1=A%2CA
// &group_children=0
// &ss_raw=velassaru
// &ac_position=0
// &ac_langcode=es
// &dest_id=256257
// &dest_type=hotel
// &search_pageview_id=dc5729ede4bf0004
// &search_selected=true
// &search_pageview_id=dc5729ede4bf0004
// &ac_suggestion_list_length=2
// &ac_suggestion_theme_list_length=0