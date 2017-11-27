function onButtonClick() {
  var csvData = document.getElementById('csvtext').value;
  var lfArray = csvData.split("\n");
  var csvArray;
  setData();
  if (document.getElementById('result') !== null) {
    clear();
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
}

window.onload = function () {
  var getData = localStorage.getItem('setData');
  document.getElementById("headertext").value = getData;
}

function setData() {
  var setData = document.getElementById('headertext').value;
  if (setData.length !== 0) {
    localStorage.setItem('setData', setData);
  }
}

function clear() {
  var element = document.getElementById('result');
  element.textContent = null;
}