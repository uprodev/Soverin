

// Import our custom CSS
import "../scss/styles.scss";


import 'jquery';
import "../../plugins/nice-select/jquery.nice-select.min.js";
import "../../plugins/fancybox/jquery.fancybox.min";
import "../../plugins/fixto/fixto.min.js";

import Swiper from "swiper/bundle";
import "jquery.marquee/jquery.marquee.min.js";



$(document).ready(function () {
  // nice-select
  $('.select-block select').niceSelect();

  //popup
  $(".fancybox").fancybox({
    touch: false,
    autoFocus: false,
  });

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

  //scroll
  $(document).on('click', '.scroll a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //slider
  var swiperPeople = new Swiper(".slider-people", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".next-people",
      prevEl: ".prev-people",
    },
  });

  var swiperInfo = new Swiper(".info-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      992: {
        direction: "vertical",
        spaceBetween: 30,
      },
    }
  });

  //marquee
  $('.marquee-1').marquee({
    duration: 40000,
    gap: 24,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //marquee
  $('.marquee-2').marquee({
    duration: 40000,
    gap: 24,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //TABS
  $(document).on('click', '.tabs-menu li', function (e){
    e.preventDefault();
    let item = $(this),
        itemIndex = item.index() + 1;

    $('.tabs-menu li').removeClass('is-active');
    $(item).addClass('is-active')

    $('.tab-content .tab-item').hide();
    $(".tab-content .tab-item-" + itemIndex + "").show();
  })

  //accordion
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });


  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('html').addClass('is-menu');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu');
  });

  //sub-menu open/close - mob-menu
  $(document).on('click', '.mob-menu li>a', function (e){
    e.preventDefault();
    let item = $(this).closest('li').find('.sub-menu');
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      item.slideDown();
    }else{
      item.slideUp();
    }
  });
});