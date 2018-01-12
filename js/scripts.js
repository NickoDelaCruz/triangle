var getType = function(digit1, digit2, digit3) {
  if (digit1+digit2<=digit3 || digit2+digit3<=digit1 || digit3+digit1<=digit2) {
    $('#none').show();
  };
   if (digit1===digit2 && digit2===digit3) {
    $('#equal').show();
    // return "#equal";
  } else if (digit1===digit2 && digit2!=digit3) {
      $('#iso').show();

      // return "#iso";
  } else if (digit1!=digit2 && digit2!=digit3) {
    $('#scale').show();
  }
};




$(document).ready(function() {
  $("form#triangleTracker").submit(function(event) {
    event.preventDefault();
    var digit1 = parseInt($("#digit1").val());
    var digit2 = parseInt($("#digit2").val());
    var digit3 = parseInt($("#digit3").val());
    getType(digit1, digit2, digit3);

  });

});
