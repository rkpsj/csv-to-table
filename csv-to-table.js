function onButtonClick() {
  var csvData = document.getElementById('csvtext').value;
  var lfArray = csvData.split("\n");
  if (csvData === null || csvData === "") {
    return;
  }
  resultClear();

  var tbody = createTable();
  var csvArray = createCsvArray(lfArray);
  var headerArray = createHeaderArray(lfArray);
  createHeader(tbody, headerArray);
  createData(tbody, csvArray);
  setData();
  restoreHeader();
}

function resultClear() {
  var result = document.getElementById('result');
  if (result) {
    result.textContent = null;
  }
}

function createTable() {
  var table = document.createElement('table');
  table.setAttribute('class', 'table table-striped table-bordered');
  var tbody = document.createElement('tbody');
  var result = document.getElementById('result');
  result.appendChild(table);
  table.appendChild(tbody);
  return tbody;
}

function createHeaderArray(lfArray) {
  var chckbx = document.getElementById('checkbox');
  if (chckbx.checked) {
    var headerArray = lfArray[0].split(",");
  } else {
    var headerText = document.getElementById('headertext').value;
    var headerArray = headerText.split(",");
  } return headerArray;
}

function createHeader(tbody, headerArray) {
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  for (var h = 0; h < headerArray.length; h++) {
    var thResult = headerArray[h];
    var th = document.createElement('th');
    tr.appendChild(th);
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

function createData(tbody, csvArray) {
  for (var j = 0; j < csvArray.length; j++) {
    var trResult = csvArray[j];
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
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
  restoreHeader();
};


function setData() {
  var headerText = document.getElementById('headertext').value;
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (headerText === null || headerText === "") {
    return;
  }
  if (getData === null) {
    var headerData = [headerText];
    localStorage.setItem('setData', JSON.stringify(headerData));
  } else if (getData[0] !== null) {
    var getData = getData.filter(function (a) {
      return a !== headerText;
    });
    var headerData = getData.unshift(headerText);
    localStorage.setItem('setData', JSON.stringify(getData));
    if (getData.length > 3) {
      var headerData = getData.pop();
      localStorage.setItem('setData', JSON.stringify(getData));
    }
  }
}

function restoreHeader() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  var restore1 = document.getElementById('restore1');
  var restore2 = document.getElementById('restore2');
  var restore3 = document.getElementById('restore3');
  if (getData === null) {
    return;
  }
  if (getData[0]) {
    restore1.innerHTML = "<input type='button' class='btn-success' value='ヘッダー1を復元' onclick='restore1();' /> " + getData[0];
  }
  if (getData[1]) {
    restore2.innerHTML = "<input type='button' class='btn-success' value='ヘッダー2を復元' onclick='restore2();' /> " + getData[1];
  }
  if (getData[2]) {
    restore3.innerHTML = "<input type='button' class='btn-success' value='ヘッダー3を復元' onclick='restore3();' /> " + getData[2];
  }
}

function restore1() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (getData === null) {
  }
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[0];
}
function restore2() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (getData === null || getData[1] === null) {
  }
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[1];
}
function restore3() {
  var getData = JSON.parse(localStorage.getItem('setData'));
  if (getData === null || getData[2] === null) {
  }
  document.getElementById("headertext").value = JSON.parse(localStorage.getItem('setData'))[2];
}

function textareaClear() {
  var textarea = document.getElementById('csvtext');
  textarea.value = null;
}