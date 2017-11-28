function onButtonClick() {
  var csvData = document.getElementById('csvtext').value;
  var lfArray = csvData.split("\n");
  var csvArray;
  setData();
  if (document.getElementById('result') !== null) {
    resultClear();
  }
  function createCsvArray() {
    var row = lfArray[i];
    var commaArray = row.split(",");
    csvArray.push(commaArray);
  }
  var table = document.createElement('table');
  function createTable() {
    var result = document.getElementById('result');
    result.appendChild(table);
  }
  function createHeader() {
    for (var h = 0; h < headerArray.length; h++) {
      var thResult = headerArray[h];
      var th = document.createElement('th');
      table.appendChild(th);
      th.innerText = thResult;
    }
  }
  function createData() {
    for (var j = 0; j < csvArray.length; j++) {
      var trResult = csvArray[j];
      var tr = document.createElement('tr')
      table.appendChild(tr);
      for (var k = 0; k < trResult.length; k++) {
        var tdResult = trResult[k];
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = tdResult;
      }
    }
  }
  if (document.getElementById('checkbox').checked) {
    csvArray = [];
    for (var i = 1; i < lfArray.length; i++) {
      createCsvArray();
    }
    createTable();
    var headerArray = lfArray[0].split(",");
    createHeader();
    createData();
  } else {
    var headerData = document.getElementById('headertext').value;
    csvArray = [];
    for (var i = 0; i < lfArray.length; i++) {
      createCsvArray();
    }
    createTable();
    var headerArray = headerData.split(",");
    createHeader();
    createData();
  }
  logData();
}

window.onload = function () {
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (getData === null) {
    return;
  }
  document.getElementById("headertext").value = getData[0];
  logData();
}

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
    false;
  } else {
    var newData = headerText;
    var datalist = [newData, getData];
    localStorage.setItem('setData', JSON.stringify(datalist));
    return;
  }
}

function resultClear() {
  var element = document.getElementById('result');
  element.textContent = null;
}

function textareaClear() {
  var textarea = document.getElementById('csvtext');
  textarea.value = null;
}

function logData() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  var log1 = document.getElementById('log1')
  var log2 = document.getElementById('log2')
  var log3 = document.getElementById('log3')
  log1.innerText = getData[0];
  log2.innerText = getData[1][0];
  log3.innerText = getData[1][1][0];
}

function log1() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[0];
}
function log2() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[1][0];
}
function log3() {
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[1][1][0];
}