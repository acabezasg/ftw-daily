$(function() {
  $('#locationSection').find('#textLink').hover(function() {
  $('#locationSection').find('#wrapperAspect').css('background', 'linear-gradient(-45deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))');
  }, function() {
    // on mouseout, reset the background colour
  $('#locationSection').find('#wrapperAspect').css('background', '');
  });
});



