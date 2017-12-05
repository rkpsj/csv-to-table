$(function () {
    $('#textClear').click(function () {
        $('#csvtext').val(null);
    });
    var resultClear = function () {
        $('#result').empty();
    };
    $('#resultClear').click(resultClear);
    var createTable = function () {
        $('<table id="table" class="table table-striped table-bordered"></table>').appendTo('#result');
        $('<thead id="thead"></thead>').appendTo('#table');
    };
    var createHeader = function (lfArray) {
        var $checkbox = $('#checkbox');
        var hdArray;
        var $headertext = $('#headertext');
        if ($checkbox.prop('checked')) {
            hdArray = lfArray[0].split(',');
        } else {
            hdArray = $headertext.val().split(',');
        }
        $('<tr id="tr"></tr>').appendTo('#thead');
        for (var h = 0; h < hdArray.length; h++) {
            var thResult = hdArray[h];
            $('<th></th>').appendTo('#tr').text(thResult);
        }
    };
    var createCsvArray = function (lfArray) {
        var $checkbox = $('#checkbox');
        var csvArray = [];
        var i;
        if ($checkbox.prop('checked')) {
            for (i = 1; i < lfArray.length; i++) {
                csvArray.push(lfArray[i].split(','));
            }
        } else {
            for (i = 0; i < lfArray.length; i++) {
                csvArray.push(lfArray[i].split(','));
            }
        }
        return csvArray;
    };
    var createData = function (csvArray) {
        var html = [];
        var $tbody = $('<tbody id="tbody"></tbody>');
        for (var j = 0; j < csvArray.length; j++) {
            var trResult = csvArray[j];
            html.push('<tr>');
            for (var k = 0; k < trResult.length; k++) {
                var tdResult = trResult[k];
                html.push('<td>' + tdResult + '</td>');
            }
            html.push('</tr>');
        }
        $tbody.append(html.join(''));
        $tbody.appendTo('#table');
    };
    var setData = function () {
        var $headertext = $('#headertext');
        var getData = JSON.parse(localStorage.getItem('setData'));
        var headerData;
        if ($headertext.val() === null || $headertext.val() === '') {
            return;
        }
        if (getData === null) {
            headerData = [$headertext.val()];
            localStorage.setItem('setData', JSON.stringify(headerData));
        } else if (getData[0] !== null) {
            getData = getData.filter(function (a) {
                return a !== $headertext.val();
            });
            headerData = getData.unshift($headertext.val());
            localStorage.setItem('setData', JSON.stringify(getData));
            if (getData.length > 3) {
                headerData = getData.pop();
                localStorage.setItem('setData', JSON.stringify(getData));
            }
        }
    };
    var resultTable = function () {
        var $csvtext = $('#csvtext');
        if ($csvtext.val() === null || $csvtext.val() === '') {
            return;
        }
        var lfArray = $csvtext.val().split('\n');
        var csvArray = createCsvArray(lfArray);
        resultClear();
        createTable();
        createHeader(lfArray);
        createCsvArray(lfArray);
        createData(csvArray);
        setData();
        restoreHeader();
    };
    $('#resultButton').click(resultTable);
    $('#restore1').click(function () {
        var getData = JSON.parse(localStorage.getItem('setData'));
        if (getData === null) {
        }
        $('#headertext').val(JSON.parse(localStorage.getItem('setData'))[0]);
    });
    $('#restore2').click(function () {
        var getData = JSON.parse(localStorage.getItem('setData'));
        if (getData === null) {
        }
        $('#headertext').val(JSON.parse(localStorage.getItem('setData'))[1]);
    });
    $('#restore3').click(function () {
        var getData = JSON.parse(localStorage.getItem('setData'));
        if (getData === null) {
        }
        $('#headertext').val(JSON.parse(localStorage.getItem('setData'))[2]);
    });
    restoreHeader();
    var getData = JSON.parse(localStorage.getItem('setData'));
    if (getData === null) {
        return;
    }
    $('#headertext').val(getData[0]);
});

function restoreHeader() {
    var getData = JSON.parse(localStorage.getItem('setData'));
    if (getData === null) {
        return;
    }
    if (getData[0]) {
        $('#restore1').html('<input type="button" class="btn-success" value="ヘッダー1を復元" /> ' + getData[0]);
    }
    if (getData[1]) {
        $('#restore2').html('<input type="button" class="btn-success" value="ヘッダー2を復元" /> ' + getData[1]);
    }
    if (getData[2]) {
        $('#restore3').html('<input type="button" class="btn-success" value="ヘッダー3を復元" /> ' + getData[2]);
    }
}