require("should");
require("../datehelper");

var name = 'test';

describe("Date.format() Test", function() {
    it("dateStr.should.eql('2015-02-02 13:14:15')", function() {
        var date = new Date(2015, 1, 2, 13, 14, 15);
        var dateStr = date.format("yyyy-MM-dd hh:mm:ss");
        dateStr.should.eql('2015-02-02 13:14:15');
    });
    it("dateStr.should.eql('2015-02-02 13:14:15')", function() {
        var date = new Date(1970, 0, 1, 0, 0, 0);
        var dateStr = date.format("yyyy-MM-dd hh:mm:ss");
        dateStr.should.eql('1970-01-01 00:00:00');
    });
});

describe("Date.parse() Test", function() {
    it("actual.should.eql(date)", function() {
        var date = new Date(2015, 1, 2, 13, 14, 15);
        var dateStr = '2015-02-02 13:14:15';
        var actual = Date.fromString(dateStr, "yyyy-MM-dd hh:mm:ss");
        actual.should.eql(date);
    });
    it("actual.should.eql(date)", function() {
        var date = new Date(2015, 5, 19, 14, 57, 00);
        var dateStr = '20150619145700';
        var actual = Date.fromString(dateStr, "yyyyMMddhhmmss");
        actual.should.eql(date);
    });
});

var date = new Date(2015, 1, 2, 13, 14, 15);

describe("InstanceOf", function() {
    it("date should be an instance of Date", function() {
        date.should.be.an.instanceof(Date);
    });
    it("date should be an instance of Object", function() {
        date.should.be.an.instanceof(Object);
    });
});
describe("Property", function() {
    it("date should have property format", function() {
        date.should.have.property("format");
    });
});