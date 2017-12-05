$(function () {
    $('#textClear').click(function () {
        $('#csvtext').val(null);
    });
    $('#resultClear').click(function () {
        $('#result').empty();
    });
    $('#resultButton').click(function () {
        var lfArray = $('#csvtext').val().split('\n');
        if ($('#csvtext').val() === null || $('#csvtext').val() === '') {
            return;
        }
        $('#result').empty();
        $('<table id="table" class="table table-striped table-bordered">').appendTo($('#result'));
        $('<thead id="thead">').appendTo('#table');
        $('<tbody id="tbody">').appendTo('#table');
        if ($('#checkbox').prop('checked')) {
            var hdArray = lfArray[0].split(',');
        } else {
            var hdArray = $('#headertext').val().split(',');
        }
        $('<tr id="tr">').appendTo('#thead');
        for (var h = 0; h < hdArray.length; h++) {
            var thResult = hdArray[h];
            $('<th>').appendTo('#tr').text(thResult);
        }
        var csvArray = [];
        if ($('#checkbox').prop('checked')) {
            for (var i = 1; i < lfArray.length; i++) {
                csvArray.push(lfArray[i].split(','));
            }
        } else {
            for (var i = 0; i < lfArray.length; i++) {
                csvArray.push(lfArray[i].split(','));
            }
        }
        for (var j = 0; j < csvArray.length; j++) {
            var trResult = csvArray[j];
            var tr = $('<tr>').appendTo('#tbody');
            for (var k = 0; k < trResult.length; k++) {
                var tdResult = trResult[k];
                $('<td>' + tdResult + '</td>').appendTo(tr);
            }
        }
        var getData = JSON.parse(localStorage.getItem('setData'));
        if ($('#headertext').val() === null || $('#headertext').val() === '') {
            return;
        }
        if (getData === null) {
            var headerData = [$('#headertext').val()];
            localStorage.setItem('setData', JSON.stringify(headerData));
        } else if (getData[0] !== null) {
            var getData = getData.filter(function (a) {
                return a !== $('#headertext').val();
            });
            var headerData = getData.unshift($('#headertext').val());
            localStorage.setItem('setData', JSON.stringify(getData));
            if (getData.length > 3) {
                var headerData = getData.pop();
                localStorage.setItem('setData', JSON.stringify(getData));
            }
        }
        restoreHeader();
    });
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