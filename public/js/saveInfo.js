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
  massiv[i].Mcolor = document.getElementById("Mcolor"+i).value;
  massiv[i].Tuesday = document.getElementById("Tuesdays"+i).value;
  massiv[i].Tcolor = document.getElementById("Tcolor"+i).value;
  massiv[i].Wednesday = document.getElementById("Wednesdays"+i).value;
  massiv[i].Wcolor = document.getElementById("Wcolor"+i).value;
  massiv[i].fr = document.getElementById("frs"+i).value;
  massiv[i].Frcolor = document.getElementById("Frcolor"+i).value;
  massiv[i].Friday = document.getElementById("Fridays"+i).value;
  massiv[i].Fcolor = document.getElementById("Fcolor"+i).value;
}
socket.emit("PutInfo",massiv);
//socket.emit("Reload","hello");
}
function Plus(){
  var tr = document.createElement("TR");
  table.appendChild(tr);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Monday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Mondays"+Info);

  tddata.appendChild(input);
  tr.appendChild(tddata);



  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Tuesday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Tuesdays"+Info);

  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Wednesday"+Info);

  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Wednesdays"+Info);
  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"fr"+Info);
  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"frs"+Info);
  tddata.appendChild(input);
  tr.appendChild(tddata);

  var tddata = document.createElement("TH");
  tddata.setAttribute('id',"Friday"+Info);
  var input = document.createElement("TEXTAREA");
  input.setAttribute('id',"Fridays"+Info);

  tddata.appendChild(input);
  tr.appendChild(tddata);
 Info = Info + 1;
}
