var assert = require('assert');
var  insertDocuments = function(db, callback) {
    var collection = db.collection('Schedual');

    /*users.remove({},function(err,numberRemoved){
          console.log("inside remove call back" + numberRemoved);
       });*/
    collection.deleteMany({}, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted a documents into the collection");
      callback(result);
    });
  }
  var url = "mongodb://valeri:dodo2110@ds163698.mlab.com:63698/school";
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db,function(){
      db.close();
    })
});
