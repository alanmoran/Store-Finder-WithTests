var util = require('util');
var storesController = require('./storesController.js');

function formatResult(err, data) {
  var result = {};
  if (err) {
    result.status = 'error';
    result.message = err.message;
  } else {
    result.status = 'ok';
    result.data = data;
  }
  return result;
}

exports.findStores = function(params, callback) {
//  console.log("In findStores, params: " + util.inspect(params.query, true, null));
  var query = params.query;
  
  // TODO: cache results based on query string
  storesController.findStores(query, function (err, data) {
    var result = formatResult(err, data);
    return callback(err, result);
  });
};

/*
This file - config.js - is used to demonstrate the best practice method for allowing configuration information
to be bundled with the app when it is built, but also allowing the latest version of the configuration to be
retrieved by the app from the cloud on start up.
*/
exports.getConfig = function(params, callback) {
  var cfg = require("config.js");
  //console.log("In getConfig, returning: " + util.inspect(cfg.CONFIG));
  return callback(null, {config: cfg.CONFIG});
};


exports.testDBLocalCreateFunction = function (param, callback) {

    $fh.db({
        "act": "create",
        "type": "myFirstEntity",
        "fields": {
            "firstName": "Joe",
            "lastName": "Bloggs",
            "address1": "22 Blogger Lane",
            "address2": "Bloggsville",
            "country": "Bloggland",
            "phone": "555-123456"
        }
    }, function(err, data) {
        if(err) {
            return callback({
                status: 'err',
                errMsg: err
            },null);
        } else {
            return callback(null, {
                status: 'ok',
                res: data
            });
        }
    });
};

exports.testDBLocalReadFunction = function (param, callback) {
    //simple list
    $fh.db({
        "act": "list",
        "type": "myFirstEntity"
    }, function(err, data) {
        if(err) {
            return callback({
                status: 'err',
                errMsg: err
            },null);
        } else {
            return callback(null, {
                status: 'ok',
                res: data
            });
        }
    });
};
