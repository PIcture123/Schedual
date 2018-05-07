var d = new Date();
var socket = io();
var table = document.getElementById('information');
var IsItIn = false;
socket.emit('information');
socket.on('SchedualList',function(docs){
    if(!IsItIn){
      console.log(IsItIn);
        for(var i=0;i<docs.length;i++){
          console.log(docs.length);
        var tr = document.createElement("TR");
        table.appendChild(tr);

        var tddata = document.createElement("TH");
        tddata.setAttribute('id',"Monday");
        if(d.getDay() == 1){
          tddata.style = "width:50%;background-color:"+docs[i].Mcolor;
        }else{
          tddata.style = "background-color:"+docs[i].Mcolor;
        }
        var text = document.createTextNode(docs[i].Monday);
        tddata.appendChild(text);
        tr.appendChild(tddata);



        var tddata = document.createElement("TH");
        tddata.setAttribute('id',"Tuesday");
        console.log(d.getDay()==2);
        if(d.getDay() == 2){
          tddata.style = 'width:50%;background-color:'+docs[i].Tcolor;
        }else{
          tddata.style = "background-color:"+docs[i].Tcolor;
        }
        var text = document.createTextNode(docs[i].Tuesday);
        tddata.appendChild(text);
        tr.appendChild(tddata);

        var tddata = document.createElement("TH");
        tddata.setAttribute('id',"Wednesday");
        if(d.getDay() == 3){
          tddata.style = 'width:50%;background-color:'+docs[i].Wcolor;
        }else{
          tddata.style = "background-color:"+docs[i].Wcolor;
        }
        var text = document.createTextNode(docs[i].Wednesday);
        tddata.appendChild(text);
        tr.appendChild(tddata);

        var tddata = document.createElement("TH");
        tddata.setAttribute('id',"fr");
        if(d.getDay() == 4){
          tddata.style = 'width:50%;background-color:'+docs[i].Frcolor;
        }else{
          tddata.style = "background-color:"+docs[i].Frcolor;
        }
        var text = document.createTextNode(docs[i].Tursday);
        tddata.appendChild(text);
        tr.appendChild(tddata);

        var tddata = document.createElement("TH");
        tddata.setAttribute('id',"Friday");
        if(d.getDay() == 5){
          tddata.style = 'width:50%;background-color:'+docs[i].Fcolor;
        }else{
          tddata.style = "background-color:"+docs[i].Fcolor;
        }
        var text = document.createTextNode(docs[i].Friday);
        tddata.appendChild(text);
        tr.appendChild(tddata);
      }
      IsItIn = true;
    }
  });
/*  socket.on("Reload",function(asd){
      location.reload("/");
  });
/*if(d.getDay() == 1){
  var x = document.getElementById("Monday").style.width = "50%";
  document.getElementById("Monday").style = "color:white;background-color:black;";
}
if(d.getDay() == 2){
  document.getElementById("ts").style.width = "50%";
  document.getElementById("ts").style = "color:white;background-color:black;";
}
if(d.getDay() == 3){
    document.getElementById("Wednesday").style.width = "50%";
    document.getElementById("Wednesday").style = "color:white;background-color:black;";
}
if(d.getDay() == 4){
    document.getElementById("fr").style.width = "50%";
    document.getElementById("fr").style = "color:white;background-color:black;";
}
if(d.getDay() == 5){
    document.getElementById("f").style.width = "50%";
    document.getElementById("f").style = "color:white;background-color:black;";
}*/
