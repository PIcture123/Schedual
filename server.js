var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 1313;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://valeri:dodo2110@ds163698.mlab.com:63698/school";
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = "mongodb://valeri:dodo2110@ds163698.mlab.com:63698/school";
var findSchedual = require("./private/modules/findDocuments.js");
var Delete = require("./private/modules/delete.js");
var Insert = require("./private/modules/insertSchedual.js");
server.listen(port, function(){
  console.log('Server listening at port %d',port);
});
app.use("/static",express.static("./public"));
app.get("/",function(req,res){
  res.sendfile(__dirname+'/public/html/schedual.html');
});
app.get("/admin",function(req,res){
  res.sendfile(__dirname+'/public/html/verify.html');
});
io.on('connection',function(socket){
  socket.on('information',function(asked){
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      findSchedual.findDocuments(db,function(docs){
        console.log(docs);
        io.emit('SchedualList',docs);
        db.close();
      });
    });
  });

  socket.on('PutInfo',function(Info){
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      Delete.removeDocument(db,function(){
        for(var i = 0;i<Info.length;i++){
          Insert.insertDocuments(db,Info[i].Monday,Info[i].Mcolor,Info[i].Tuesday,Info[i].Tcolor,Info[i].Wednesday,
            Info[i].Wcolor,Info[i].fr,Info[i].Frcolor,Info[i].Friday,Info[i].Fcolor,function(){
            db.close();
          });
        }
        db.close();
      });
    });
  });

});
