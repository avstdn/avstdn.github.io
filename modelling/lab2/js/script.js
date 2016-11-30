var rows, columns;
var form = document.getElementById("frm");

$('select').change(function() {
  $('form input').remove();
  $('form br').remove();
  rows = columns = $('select').val();
  console.log(rows, columns);
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < columns; j++) {
      var input = $('<input>').attr({class: 'matrix_cell'/*, value: i + j*/});
      form.appendChild(input[0]);
    }
    var br = $('<br>')[0];
    form.appendChild(br);
  }
});