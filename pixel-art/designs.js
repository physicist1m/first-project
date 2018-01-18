
//size
var height, width, colorPicker, tempColor, colorPicker;
  colorPicker = $('#colorPicker');
  tempColor = colorPicker.val();
$('#enter').click( function() {
  $('#pixel_canvas').children().remove();
  height = $('#input_height').val();
  width = $('#input_height').val();
  //console.log(height + " " + width);
  for(var j = 1; j <= height; j++) {
      $('#pixel_canvas').prepend('<tr></tr>');
      $('tr').first().attr("id", "r" + j);
  }
  for(var j = 1; j <= height; j++) {
    for(var i = 1; i <= width; i++) {
      $('#r' + j).prepend('<td></td>');
    }
  }
});

//color
colorPicker.on('change', function() {
  tempColor = colorPicker.val();
});

//painting
$('#pixel_canvas').on('click', 'td', function() {
  //$( this ).text('darou');
  $( this ).css('background', tempColor);
});
