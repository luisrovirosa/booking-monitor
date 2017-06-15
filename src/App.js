let Crawler = require('crawler');
let fs = require('fs');
let BookingUrlGenerator = require('./BookingUrlGenerator');

let c = new Crawler({
    maxConnections: 1,
    callback: function(error, res, done) {
        if (error) {
            console.log(error);
            return done();
        }
        var $ = res.$;
      fs.createWriteStream("booking.html").write(res.body);
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        console.log($('title').text());
        done();
    }
});

let urlGenerator = new BookingUrlGenerator();

c.queue(urlGenerator.url('Velassaru Maldives', new Date("2017/07/01"), new Date("2017/07/02")));