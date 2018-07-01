var socket = io();
var Info = 0;
socket.on('SchedualList',function(docs){
    Info = docs.length;
    console.log(Info);
  });


function Clicked(){
var massiv = [];
for(var i =0;i<Info;i++){
  massiv[i] = {
    Monday : "",
    Mcolor:"",
    Tuesday:"",
    Tcolor:"",
    Wednesday:"",
    Wcolor:"",
    fr:"",
    Frcolor:"",
    Friday:"",
    Fcolor:""
  };
}
for(var i=0;i<Info;i++){
  massiv[i].Monday = document.getElementById("Mondays"+i).value;
  massiv[i].Mcolor = "#BFD641";
  massiv[i].Tuesday = document.getElementById("Tuesdays"+i).value;
  massiv[i].Tcolor = "#ECDB54";
  massiv[i].Wednesday = document.getElementById("Wednesdays"+i).value;
  massiv[i].Wcolor = "#6F9FD8";
  massiv[i].fr = document.getElementById("frs"+i).value;
  massiv[i].Frcolor = "#EADEDB";
  massiv[i].Friday = document.getElementById("Fridays"+i).value;
  massiv[i].Fcolor = "#B4B7BA";
}
socket.emit("PutInfo",massiv);
socket.emit("Reload","hello");
}
function Plus(){
  var tr = document.createElement("TR");
  table.appendChild(tr);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Monday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Mondays"+Info);
  var color = document.createElement("INPUT");
  color.setAttribute("type","color");
  color.setAttribute("value","#FFFFFF");
  color.setAttribute("id","Mcolor"+Info);
  tddata.appendChild(color);
  tddata.appendChild(input);
  tr.appendChild(tddata);



  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Tuesday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Tuesdays"+Info);
  var color = document.createElement("INPUT");
  color.setAttribute("type","color");
  color.setAttribute("id","Tcolor"+Info);
  color.setAttribute("value","#FFFFFF");
  tddata.appendChild(color);
  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Wednesday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Wednesdays"+Info);
  var color = document.createElement("INPUT");
          color.setAttribute("type","color");
          color.setAttribute("id","Wcolor"+Info);
          color.setAttribute("value","#FFFFFF");
          tddata.appendChild(color);

  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"fr"+Info);
  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"frs"+Info);
  var color = document.createElement("INPUT");
  color.setAttribute("type","color");
  color.setAttribute("id","Frcolor"+Info);
  color.setAttribute("value","#FFFFFF");
  tddata.appendChild(color);
  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Friday"+Info);
  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Fridays"+Info);
  var color = document.createElement("INPUT");
  color.setAttribute("type","color");
  color.setAttribute("id","Fcolor"+Info);
  color.setAttribute("value","#FFFFFF");
  tddata.appendChild(color);
  tddata.appendChild(input);
  tr.appendChild(tddata);
 Info = Info + 1;
}
