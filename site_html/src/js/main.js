

// Import our custom CSS
import "../scss/styles.scss";


import 'jquery';
import "../../plugins/nice-select/jquery.nice-select.min.js";
import "../../plugins/fancybox/jquery.fancybox.min";
import "../../plugins/fixto/fixto.min.js";

import Swiper from "swiper/bundle";
import Dot from "dotdotdot-js/dist/dotdotdot";
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
    top: 50,
    useNativeSticky:true
  });


  //fix-block
  $('.article .left').fixTo('.article .content', {
    top: 50,
    useNativeSticky:true
  });

  //fix-block
  $('.text-privacy .wrap-menu').fixTo('.text-privacy .content', {
    top: 50,
    useNativeSticky:true
  });

  if(window.innerWidth > 991){
    //fix-block
    $('.form-slider .form-wrap').fixTo('.form-slider .content', {
      top: 100,
      useNativeSticky:true
    });
  }


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
    pagination: {
      el: ".people-pagination",
      type: "progressbar",
    },
  });

  //slider
  var swiperPeople2 = new Swiper(".slider-people-2", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".next-people-2",
      prevEl: ".prev-people-2",
    },
    pagination: {
      el: ".people-pagination-2",
      type: "progressbar",
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

  if(window.innerWidth >575){
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
  } else{
    //marquee
    $('.marquee-1').marquee({
      duration: 10000,
      gap: 24,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      loop:true,
      startVisible: true,
    });

    //marquee
    $('.marquee-2').marquee({
      duration: 10000,
      gap: 24,
      delayBeforeStart: 0,
      direction: 'right',
      duplicated: true,
      loop:true,
      startVisible: true,
    });
  }


  //TABS
  $(document).on('click', '.tabs-menu li', function (e){
    e.preventDefault();
    let item = $(this),
        itemIndex = item.index() + 1;
    console.log( itemIndex)

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
  $(document).on('click', '.close-menu a, .menu-responsive .top', function (e){
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu');
  });


  //sub-menu open/close - mob-menu
  $(document).on('click', '.mob-menu>li>a', function (e){
    e.preventDefault();
    let item = $(this).closest('li').find('.sub-menu');
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      item.slideDown();
    }else{
      item.slideUp();
    }
  });

  // +/-
  $(".btn-count-plus").click(function () {
    var e = $(this).parent().find("input");
    return e.val(parseInt(e.val()) + 1), e.change(), !1
  }), $(".btn-count-minus").click(function () {
    var e = $(this).parent().find("input"), t = parseInt(e.val()) - 1;
    return t = t < 1 ? 1 : t, e.val(t), e.change(), !1
  })

  $('.blog .item p').dotdotdot({
    height: 50
  });


  //onePageNav
  if($('.fix').length){
    $('a[href^="#"]').click(function() {
      $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 'slow','swing');
      return false;
    });
  }

  function onePageNav( switchName ) {
    const navSwitch = $(switchName);
    const deductHeight = 60;
    let navArr = [];


    navSwitch.each(function(i){
      let navSwitchHref = $(this).attr('href');
      let tgtOff = $(navSwitchHref).offset().top - deductHeight;
      navArr.push([]);
      navArr[i].switch = $(this);
      navArr[i].tgtOff = tgtOff;
    });
//        console.log(navArr);
    $(window).scroll(function () {
      for( let i = 0; i < navArr.length; i++ ){
        let scroll = $(window).scrollTop();
        let tgtKey = navArr[i];
        let tgtSwitch = tgtKey.switch;
        let tgtOff = tgtKey.tgtOff;
        if ( scroll >= tgtOff ) {
          navSwitch.removeClass('is-current');
          tgtSwitch.addClass('is-current');
        } else {
          tgtSwitch.removeClass('is-current');
        }
      }
    });
  }
  $(window).on('load resize',function(){
    onePageNav('.js-curnav-switch');
  });




});
