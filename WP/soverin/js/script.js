jQuery(document).ready(function ($) {

  //fix-block
  $('.help-menu').fixTo('.help .content', {
    top: 100,
    useNativeSticky:true
  });

  //mob footer show/hide menu
  if(window.innerWidth < 576){
    $(document).on('click', 'footer .footer-menu-wrap .item h5', function (e){
      e.preventDefault()
      let item = $(this).closest('.item');

      item.toggleClass('is-open');

      if(item.hasClass('is-open')){
        item.find('.mob').slideDown()
      }else{
        item.find('.mob').slideUp()
      }
    })
  }
});