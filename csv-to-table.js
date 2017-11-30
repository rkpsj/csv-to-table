function onButtonClick() {
  var csvData = document.getElementById('csvtext').value;
  var lfArray = csvData.split("\n");
  resultClear();

  var table = createTable();
  var csvArray = createCsvArray(lfArray);
  var headerArray = createHeaderArray(lfArray);
  createHeader(table, headerArray);
  createData(table, csvArray);
}

function resultClear() {
  var result = document.getElementById('result');
  if (result) {
      result.textContent = null;
  }
}

function createTable() {
  var table = document.createElement('table');
  var result = document.getElementById('result');
  result.appendChild(table);
  return table;
}

function createHeaderArray(lfArray) {
  var chckbx = document.getElementById('checkbox');
  if (chckbx.checked) {
      var headerArray = lfArray[0].split(",");
  } else {
      var headerData = document.getElementById('headertext').value;
      var headerArray = headerData.split(",");
  } return headerArray;
}

function createHeader(table, headerArray) {
  for (var h = 0; h < headerArray.length; h++) {
      var thResult = headerArray[h];
      var th = document.createElement('th');
      table.appendChild(th);
      th.innerText = thResult;
  }
}

function createCsvArray(lfArray) {
  var chckbx = document.getElementById('checkbox');
  var csvArray = [];
  if (chckbx.checked) {
      for (var i = 1; i < lfArray.length; i++) {
          var row = lfArray[i];
          var commaArray = row.split(",");
          csvArray.push(commaArray);
      }
  } else {
      for (var i = 0; i < lfArray.length; i++) {
          var row = lfArray[i];
          var commaArray = row.split(",");
          csvArray.push(commaArray);
      }
  } return csvArray;
}

function createData(table, csvArray) {
  for (var j = 0; j < csvArray.length; j++) {
      var trResult = csvArray[j];
      var tr = document.createElement('tr');
      table.appendChild(tr);
      for (var k = 0; k < trResult.length; k++) {
          var tdResult = trResult[k];
          var td = document.createElement('td');
          tr.appendChild(td);
          td.innerText = tdResult;
      }
  }
}

window.onload = function () {
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (getData === null) {
    return;
  }
  document.getElementById("headertext").value = getData[0];
  logData();
};


function setData() {
  var headerText = document.getElementById('headertext').value;
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (headerText === null || headerText === "") {
    return;
  }
  if (getData === null) {
    var setData = [headerText, null];
    localStorage.setItem('setData', JSON.stringify(setData));
    return;
  }
  if (getData[0] === headerText) {
  } else {
    var datalist = getData.unshift(headerText);
    localStorage.setItem('setData', JSON.stringify(getData));
    return;
  }
}

function logData() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  var log1 = document.getElementById('log1')
  var log2 = document.getElementById('log2')
  var log3 = document.getElementById('log3')
  log1.innerText = getData[0];
  log2.innerText = getData[1];
  log3.innerText = getData[2];
}

function log1() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[0];
}
function log2() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[1];
}
function log3() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[2];
}

function textareaClear() {
  var textarea = document.getElementById('csvtext');
  textarea.value = null;
}