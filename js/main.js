$(document).ready(function(){
  $('button').click(function(){
    var toAdd = $('input[name=ListItem]').val();
      $('ol').append('<li>' + toAdd + '</li>');
  });
});