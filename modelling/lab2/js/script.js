
var rows, columns;
var form = document.getElementById("frm");

$('select').change(function() {
  $('form input').remove();
  $('form br').remove();
  rows = columns = parseInt($('select').val()) + 1;
  console.log(rows, columns);
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < columns; j++) {
      if(j == 0 && i > 0) {
        var input = $('<input>').attr({class: 'matrix_cell', value: 'S' + (i-1), "disabled": true});
        form.appendChild(input[0]);
      } else if(i == 0 && j > 0) {
        var input = $('<input>').attr({class: 'matrix_cell', value: 'S' + (j-1), "disabled": true});
        form.appendChild(input[0]);
      } else if(i == 0 && j == 0) {
        var input = $('<input>').attr({class: 'matrix_cell', "disabled": true});
        form.appendChild(input[0]);
      } else {
        var input = $('<input>').attr({class: 'matrix_cell'/*, value: i + j*/});
        form.appendChild(input[0]);
      }
    }
    var br = $('<br>')[0];
    form.appendChild(br);
  }
});

var user = {
  firstName: 'Vasya'
};
var admin = {
  firstName: 'Admin'
};

function func() {
  
  alert(this);
}

func();
// user['f']();
