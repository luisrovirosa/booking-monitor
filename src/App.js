var Crawler = require('crawler');

var c = new Crawler({
    maxConnections: 1,
    callback: function(error, res, done) {
        if (error) {
            console.log(error);
            return done();
        }
        var $ = res.$;
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        console.log($('title').text());
        done();
    }
});

c.queue('http://www.amazon.com');
