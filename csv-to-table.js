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
  var getData1 = localStorage.getItem('setData1');
  var getData2 = localStorage.getItem('setData2');
  var getData3 = localStorage.getItem('setData3');
  if (getData1 === null) {
    return;
  }
  document.getElementById("headertext").value = getData1;
  logData();
}

function setData() {
  var headerText = document.getElementById('headertext').value;
  var getData1 = localStorage.getItem('setData1');
  var getData2 = localStorage.getItem('setData2');
  var getData3 = localStorage.getItem('setData3');
  if (headerText === null || headerText === "") {
    return;
  }
  if (getData1 === headerText) {
    return;
  }
  if (getData1 === null) {
    setData1 = headerText;
    localStorage.setItem('setData1', setData1);

  } else if (getData2 === null) {
    setData2 = getData1;
    localStorage.setItem('setData2', setData2);
    setData1 = headerText;
    localStorage.setItem('setData1', setData1);
  } else if (getData2 === headerText) {
    setData2 = getData1;
    localStorage.setItem('setData2', setData2);
    setData1 = headerText;
    localStorage.setItem('setData1', setData1);
  } else {
    setData3 = getData2;
    localStorage.setItem('setData3', setData3);
    setData2 = getData1;
    localStorage.setItem('setData2', setData2);
    setData1 = headerText;
    localStorage.setItem('setData1', setData1);
  }
}

function logData() {
  var getData1 = localStorage.getItem('setData1');
  var getData2 = localStorage.getItem('setData2');
  var getData3 = localStorage.getItem('setData3');
  var log1 = document.getElementById('log1')
  var log2 = document.getElementById('log2')
  var log3 = document.getElementById('log3')
  log1.innerText = getData1;
  log2.innerText = getData2;
  log3.innerText = getData3;
}


function log1() {
  var getData1 = localStorage.getItem('setData1');
  document.getElementById("headertext").value = getData1;
}
function log2() {
  var getData2 = localStorage.getItem('setData2');
  document.getElementById("headertext").value = getData2;
}
function log3() {
  var getData3 = localStorage.getItem('setData3');
  document.getElementById("headertext").value = getData3;
}

function resultClear() {
  var element = document.getElementById('result');
  element.textContent = null;
}

function textareaClear() {
  var textarea = document.getElementById('csvtext');
  textarea.value = null;
}