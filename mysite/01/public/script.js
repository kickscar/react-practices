$('.Menu').on('click', function(){
  if ($('.Site').hasClass('is-open')) {
    $('.Menu').removeClass('is-active');
  	$('.Site').removeClass('is-open');
  } else {
    $('.Menu').addClass('is-active');
  	$('.Site').addClass('is-open');
  }
});