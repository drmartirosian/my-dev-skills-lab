$(document).ready(function(){
  $('button').click(function(){
    var toAdd = $('input[name=ListItem]').val();
      $('ol').append('<li>' + '<button id="x" onclick=removeFun(); >X</button>' + toAdd + '</li>');
  });
});

$('.ol').on('click', 'button', function() {
  $(this).parent().remove();
})
