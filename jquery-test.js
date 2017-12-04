$(function () {
  var $text = $("#csvtext");
  $("#textClear").click(function () {
    $text.val(null);
  });
  var $result = $("#result");
  $("#resultClear").click(function () {
    $result.empty();
  });
  $("#resultButton").click(function () {
    var $lfArray = $text.val().split('\n');
    console.log($lfArray);
    if ($text.val() === null || $text.val() === "") {
      return;
    }
    $result.empty();
    $("<table id='table' class='table table-striped table-bordered'>").appendTo($result);
    $("<tbody id='tbody'>").appendTo("#table");
    if ($("#checkbox").prop("checked")) {
      var $hdArray = $lfArray[0].split(',');
      console.log($hdArray);
    } else {
      var $hdArray = $("#headertext").val().split(',');
      console.log($hdArray);
    }
  });
});