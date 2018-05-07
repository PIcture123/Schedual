var assert = require('assert');
module.exports={
     removeDocument : function(db, callback) {

        var collection = db.collection('Schedual');
        collection.deleteMany({}, function(err, result) {
          assert.equal(err, null);
          console.log("All documents removed from the DataBase");
          callback(result);
        });
    }
}
