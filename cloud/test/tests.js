var assert = require('assert'),
    findStores = require('../main').findStores,
    testDBLocalCreateFunction = require('../main').testDBLocalCreateFunction;


suite('findStores', function () {
    test('findStores should return data and not an error', function () {
        findStores({ query:'' }, function (err, res) {
            assert.ok(!err);
            assert.ok(res);
            assert.ok(res.data);
            assert.ok(res.data.length > 0);
        });
    });
    test('findStores should have a record which is an object', function () {
        findStores({ query:'' }, function (err, res) {
            var data = res.data,
                aRecord = data[0];
            assert.ok(aRecord && typeof aRecord === "object");
        });
    });
    test('findStores should have a record which contains county, address and distance', function () {
        findStores({ query:'' }, function (err, res) {
            var data = res.data,
                aRecord = data[0];
            assert.ok(aRecord.county);
            assert.ok(aRecord.address && typeof aRecord.address === "object");
            assert.ok(aRecord.distance && typeof aRecord.distance === "number");
        });
    });
});

suite('testDBLocalCreateFunction', function () {
    test('testDBLocalCreateFunction should return data and not an error', function () {
        testDBLocalCreateFunction({ query:'' }, function (err, res) {
            console.log(res);
            assert.ok(!err);
            assert.ok(res);
        });
    });
});
