function onButtonClick () {
  const csvData = document.forms.csvform.csvtext.value;
  var tempArray = csvData.split("\n");
  //console.log(tempArray);
  if (document.checkbox.header.checked){
  var csvArray = [];
  for (var i = 1; i < tempArray.length; i++ ) {
    var row = tempArray[i];
    //console.log(row)
    var rowArray = row.split(",");
    csvArray.push(rowArray);
  };
  //console.log('result',csvArray);
  
  

  var table = document.createElement('table');
  //var d = document.getElementById('d1');
  d1.appendChild(table);

  var headerArray = tempArray[0].split(",");
  for (var h = 0; h < headerArray.length; h++ ) {
    var H = headerArray[h];
    var th = document.createElement('th');
    table.appendChild(th);
    th.innerText = H;
  };

  for (var j = 0; j < csvArray.length; j++ ) {
    var J = csvArray[j];
     var tr = document.createElement('tr');
     table.appendChild(tr);
    for (var k = 0; k < J.length; k++ ) {
      var K = J[k];
      var td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = K;
    };
  };
 }else{
   var csvArray = [];
   for (var i = 0; i < tempArray.length; i++ ) {
     var row = tempArray[i];
     //console.log(row)
     var rowArray = row.split(",");
     csvArray.push(rowArray);
   };
  //console.log('result',csvArray);


   var table = document.createElement('table');
   //var d = document.getElementById('d1');
   d1.appendChild(table);

   for (var j = 0; j < csvArray.length; j++ ) {
     var J = csvArray[j];
     var tr = document.createElement('tr')
     table.appendChild(tr);
    for (var k = 0; k < J.length; k++ ) {
      var K = J[k];
      var td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = K;
    };
   };
 };
};
