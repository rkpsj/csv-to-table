function onButtonClick () {
  const csvData = document.forms.csvform.csvtext.value;
  
  var setData = document.forms.csvform.headertext.value;
  localStorage.setItem('setData', setData);
  
  var lfArray = csvData.split("\n");
 
  if (document.checkbox.header.checked){
  var csvArray = [];
  for (var i = 1; i < lfArray.length; i++ ) {
    var row = lfArray[i];
    var commaArray = row.split(",");
    csvArray.push(commaArray);
  };

  var table = document.createElement('table');
  result.appendChild(table);

  var headerArray = lfArray[0].split(",");
  for (var h = 0; h < headerArray.length; h++ ) {
    var thResult = headerArray[h];
    var th = document.createElement('th');
    table.appendChild(th);
    th.innerText = thResult;
  };

  for (var j = 0; j < csvArray.length; j++ ) {
    var trResult = csvArray[j];
     var tr = document.createElement('tr');
     table.appendChild(tr);
    for (var k = 0; k < trResult.length; k++ ) {
      var tdResult = trResult[k];
      var td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = tdResult;
    };
  };
 }else{
   var headerData = document.forms.csvform.headertext.value;
   var csvArray = [];
   for (var i = 0; i < lfArray.length; i++ ) {
     var row = lfArray[i];
     var commaArray = row.split(",");
     csvArray.push(commaArray);
   };

   var table = document.createElement('table');
   result.appendChild(table);

   var headerArray = headerData.split(",");
   for (var h = 0; h < headerArray.length; h++ ) {
    var thResult = headerArray[h];
    var th = document.createElement('th');
    table.appendChild(th);
    th.innerText = thResult;
   };

   for (var j = 0; j < csvArray.length; j++ ) {
     var trResult = csvArray[j];
     var tr = document.createElement('tr')
     table.appendChild(tr);
    for (var k = 0; k < trResult.length; k++ ) {
      var tdResult = trResult[k];
      var td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = tdResult;
    };
   };
 };
};

window.onload = function () {
  var　getData = localStorage.getItem('setData');
  document.getElementById("headertext").value = getData;
};