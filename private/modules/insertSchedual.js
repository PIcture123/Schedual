var assert = require('assert');
module.exports ={
 insertDocuments : function(db,Monday,Mcolor,Tuesday,Tcolor,Wednesday,Wcolor,Tursday,Frcolor,Friday,Fcolor, callback) {
    var collection = db.collection('Schedual');

    collection.insertMany([
      {
        Monday : Monday,
        Mcolor:Mcolor,
        Tuesday:Tuesday,
        Tcolor:Tcolor,
        Wednesday:Wednesday,
        Wcolor:Wcolor,
        Tursday:Tursday,
        Frcolor:Frcolor,
        Friday:Friday,
        Fcolor:Fcolor 
      }
    ], function(err, result) {
      assert.equal(err, null);
      console.log("Inserted a document into the collection");
      callback(result);
    });
  }
}
