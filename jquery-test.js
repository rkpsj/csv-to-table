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
  });
});