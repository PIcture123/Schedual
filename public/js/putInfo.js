var d = new Date();
var socket = io();
var table = document.getElementById('information');
var IsItIn = false;
socket.emit('information');
socket.on('SchedualList',function(docs){
      if(!IsItIn){
          for(var i=0;i<docs.length;i++){
            console.log(docs.length);
          var tr = document.createElement("TR");
          table.appendChild(tr);

          var tddata = document.createElement("TH");
          tddata.setAttribute('id',"Monday"+i);

          var input = document.createElement("TEXTAREA");
          var text = docs[i].Monday;
          input.setAttribute('id',"Mondays"+i);

          input.value = text;
          console.log(text);
          tddata.appendChild(input);

          

          tr.appendChild(tddata);



          var tddata = document.createElement("TH");
          tddata.setAttribute('id',"Tuesday"+i);

          var input = document.createElement("TEXTAREA");
          input.setAttribute('id',"Tuesdays"+i);
          var text = docs[i].Tuesday;

          input.value = text;

          tddata.appendChild(input);

          

          tr.appendChild(tddata);

          var tddata = document.createElement("TH");
          tddata.setAttribute('id',"Wednesday"+i);

          var input = document.createElement("TEXTAREA");
          input.setAttribute('id',"Wednesdays"+i);
          var text = docs[i].Wednesday;
          input.value = text;
          tddata.appendChild(input);

          
          tr.appendChild(tddata);

          var tddata = document.createElement("TH");
          tddata.setAttribute('id',"fr"+i);
          var input = document.createElement("TEXTAREA");
          input.setAttribute('id',"frs"+i);
          var text = docs[i].Tursday;
          input.value = text;
          tddata.appendChild(input);

          
          tr.appendChild(tddata);

          var tddata = document.createElement("TH");
          tddata.setAttribute('id',"Friday"+i);
          var input = document.createElement("TEXTAREA");
          input.setAttribute('id',"Fridays"+i);
          var text = docs[i].Friday;
          input.value = text;
          tddata.appendChild(input);

          
          tr.appendChild(tddata);
        }
        IsItIn = true;
      }
  });
